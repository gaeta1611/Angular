import { Component, Output, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector : 'new-note', //selector "new-note" can be used as a html tag now
    templateUrl : 'app/templates/create_note.html',
})

export class createNoteComponent implements OnInit {
  //pour plus tard
    @Output() cancelEvent: EventEmitter<any> = new EventEmitter<any>();
    @Output() submitEvent: EventEmitter<any> = new EventEmitter();
    @Input() modifiedNote: any;
    //@Input() categories: any;

    noteFormGroup: FormGroup;

    categories = [{
      "id" : 2,
      "name" : "todo"
    } , {
      "id" : 1,
      "name" : "remarque"
    }]

    ngOnInit() {
        this.noteFormGroup = new FormGroup({
            form_title: new FormControl(),
            form_content: new FormControl()
        });
    }

    cancel() {
        this.cancelEvent.emit();
    }

    submit() {
        this.submitEvent.emit(this.modifiedNote);
    }
}
