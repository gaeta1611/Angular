import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { categorieComponent } from './categorie.component';

import { Categorie } from './categorie';

@Component({
    selector : 'new-cat', //selector "new-note" can be used as a html tag now
    templateUrl : 'app/templates/create_categorie.html',
})

export class createCategorieComponent implements OnInit {
    @Output() cancelEvent: EventEmitter<any> = new EventEmitter<any>();
    @Output() submitEvent: EventEmitter<any> = new EventEmitter();
    @Input() modifiedCat: any;

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
        this.submitEvent.emit(this.modifiedCat);
    }
}
