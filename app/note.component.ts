import { Component, Output } from '@angular/core';
//http://stackoverflow.com/questions/37252146/angular-2-redirect-on-click
import { createNoteComponent } from './createNote.component';
import { NotepadService } from './notepad.service';

//Import data models
import { Categorie } from './categorie';
import { Note } from './note';

@Component({
  selector: 'note',
  templateUrl : 'app/templates/note.html',
  providers : [NotepadService],
})

export class noteComponent {
    display: boolean = false;
    selectedNote: number = 0;
    noteToModify: any = null;

    notes : Note[];
    categories : Categorie[];

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

    constructor(private notepadService : NotepadService) {}

    //on page init, fill in the note and categorie list.
    ngOnInit() {
        this.notepadService.getNotes().subscribe(
          data => { this.notes = JSON.parse(data); }
        )

        this.notepadService.getCategories().subscribe(
          data => { this.categories = JSON.parse(data); }
        )
    }

    modifyNote(note: Note) {
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

    deleteNote(note : Note) {
      let index = this.notes.findIndex((n) => (n === note));
      if (index != -1) {
         this.notes.splice(index, 1);
      }

      this.notepadService.deleteNote(note).subscribe(
           data => console.log(data),
       );
    }

    submit(note : Note) {
      this.display = false;
       if (this.selectedNote == 0) {
           this.notes.push(note);
           this.notepadService.createNote(note).subscribe(
               data => console.log(data),
           );
       } else {
           this.notepadService.updateNote(note).subscribe(
               data => console.log(data),
           );
       }
    }
}
