import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { categorieComponent } from './categorie.component';

import { Categorie } from './categorie';

@Component({
    selector : 'nouvelleCategorie', 
    templateUrl : 'app/templates/create_categorie.html',
})

export class createCategorieComponent implements OnInit {
    @Output() cancelEvent: EventEmitter<any> = new EventEmitter<any>();
    @Output() submitEvent: EventEmitter<any> = new EventEmitter();
    @Input() modifiedCategorie: any;

    noteFormGroup: FormGroup;

    ngOnInit() {
        this.noteFormGroup = new FormGroup({
            noteTitle: new FormControl(),
        });
    }

    cancel() {
        this.cancelEvent.emit();
    }

    submit() {
        this.submitEvent.emit(this.modifiedCategorie);
    }
}
