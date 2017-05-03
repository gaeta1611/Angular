import { Component, Output } from '@angular/core';
//http://stackoverflow.com/questions/37252146/angular-2-redirect-on-click
import {createNoteComponent} from './createNote.component';

@Component({
  selector: 'note', //selector "my-app" can be used as a html tag now
  //template: '<new-note></new-note>',
  templateUrl : 'app/templates/note.html',
})

export class noteComponent {
    display: boolean = false;
    selectedNote: number = 0;
    noteToModify: any = null;

    emptyNote = [{
        "title" : "",
        "content" : "",
        "date" : "",
        "id" : 0,
        "categorie" : {
            "id" : 0,
            "name" : ""
        }
    }]

    notes = [{
        "title" : "première note",
        "content" : "test",
        "date" : "22/03",
        "id" : 1,
        "categorie" : {
            "id" : 1,
            "name" : "remarque"
        }
    }, {
        "title" : "Seconde note",
        "content" : "test numéro 2",
        "date" : "22/04",
        "id" : 2,
        "categorie" : {
            "id" : 2,
            "name" : "todo"
        }
    }]

    modifyNote(note: any) {
        if (this.display == true && this.selectedNote == note.id) {
            this.display = false;
        }
        else if (this.display == true && this.selectedNote != note.id) {
            this.selectedNote = note.id;
            this.noteToModify = note;
        }
        else {
            this.display = !this.display;
            this.selectedNote = note.id;
            this.noteToModify = note;
        }
    }

    deleteNote(note : any) {
        // TODO: Use the API tu delete the note
    }
}
