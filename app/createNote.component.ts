import { Component, Output, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NotepadService } from './notepad.service';

import { Categorie } from './categorie';

@Component({
    selector : 'new-note', //selector "new-note" can be used as a html tag now
    templateUrl : 'app/templates/create_note.html',
    providers : [NotepadService],
})

export class createNoteComponent implements OnInit {
    //pour plus tard
    @Output() cancelEvent: EventEmitter<any> = new EventEmitter<any>();
    @Output() submitEvent: EventEmitter<any> = new EventEmitter();
    @Input() modifiedNote: any;
    //@Input() categories: any;

    noteFormGroup: FormGroup;

    categories : Categorie[];

    constructor(private notepadService : NotepadService) {}

    ngOnInit() {
        this.noteFormGroup = new FormGroup({
            form_title: new FormControl(),
            form_content: new FormControl()
        });

        this.notepadService.getCategories().subscribe(
          data => { this.categories = JSON.parse(data); }
        )
    }

    cancel() {
        this.cancelEvent.emit();
    }

    submit() {
        this.submitEvent.emit(this.modifiedNote);
    }
}
