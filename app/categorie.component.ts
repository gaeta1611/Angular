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
    selectedCat: number = 0;
    catToModify: any = null;

    categories : Categorie[];

    constructor(private notepadService : NotepadService) {}

    emptyCat = [{
        "id" : 0,
        "nom" : ""
    }]

    ngOnInit() {
        this.notepadService.getCategories().subscribe(
          data => { this.categories = JSON.parse(data); }
        )
    }

    submit(categorie : Categorie) {
        this.display = false;
        if (this.selectedCat == 0) {
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

    deleteCat(categorie : Categorie) {
        let index = this.categories.findIndex((n) => (n === categorie));
        if (index != -1) {
           this.categories.splice(index, 1);
        }

        this.notepadService.deleteCategorie(categorie).subscribe(
            data => console.log(data),
        );
    }

    modifyCat(cat : Categorie) {
        if (this.display == true && this.selectedCat == cat.id) {
            this.display = false;
        }
        else if (this.display == true && this.selectedCat != cat.id) {
            this.selectedCat = cat.id;
            this.catToModify = cat;
        }
        else {
            this.display = !this.display;
            this.selectedCat = cat.id;
            this.catToModify = cat;
        }
    }
}
