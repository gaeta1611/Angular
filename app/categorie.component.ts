import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component';
import { NotepadService } from './notepad.service';

import { Categorie } from './categorie';

@Component({
    selector : 'categories',
    templateUrl : 'app/templates/categorie.html',
    providers : [NotepadService],
})

export class categorieComponent {
    display: boolean = false;
    selectedCategorie: number = 0;
    categorieToModify: any = null;

    categories : Categorie[];

    constructor(private notepadService : NotepadService) {}

    emptyCategorie = [{
        "id" : 0,
        "nom" : ""
    }]

    //on page init, fill in the categorie list.
    ngOnInit() {
        this.notepadService.getCategories().subscribe(
          data => { this.categories = JSON.parse(data); }
        )
    }

    submit(categorie : Categorie) {
        this.display = false;
        if (this.selectedCategorie == 0) {
            this.categories.push(categorie);
            this.notepadService.createCategorie(categorie).subscribe(
                data => console.log(data),
            );
        } else {
            this.notepadService.updateCategorie(categorie).subscribe(
                data => console.log(data),
            );
        }
    }

    deleteCategorie(categorie : Categorie) {
        let index = this.categories.findIndex((n) => (n === categorie));
        if (index != -1) {
           this.categories.splice(index, 1);
        }

        this.notepadService.deleteCategorie(categorie).subscribe(
            data => console.log(data),
        );
    }

    modifyCategorie(categorie : Categorie) {
        if (this.display == true && this.selectedCategorie == categorie.id) {
            this.display = false;
        }
        else if (this.display == true && this.selectedCategorie != categorie.id) {
            this.selectedCategorie = categorie.id;
            this.categorieToModify = categorie;
        }
        else {
            this.display = !this.display;
            this.selectedCategorie = categorie.id;
            this.categorieToModify = categorie;
        }
    }
}
