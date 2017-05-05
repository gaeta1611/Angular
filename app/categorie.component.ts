import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component';

@Component({
    selector : 'categories',
    templateUrl : 'app/templates/categorie.html',

})

export class categorieComponent {
    display: boolean = false;
    selectedCat: number = 0;
    catToModify: any = null;

    //categories : any[];

    emptyCat = [{
        "id" : 0,
        "name" : ""
    }]

    categories = [{
        "id" : 2,
        "name" : "remarque"},{
        "id" : 3,
        "name" : "todo"
    }]

    SubmitEvent(cat: any) {
        this.display = false;
    }

    deleteCat(cat : any) {
        let index = this.categories.findIndex((n) => (n === cat));
        if (index != -1) {
           this.categories.splice(index, 1);
        }
    }

    modifyCat(cat : any) {
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
