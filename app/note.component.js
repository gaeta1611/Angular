"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var notepad_service_1 = require('./notepad.service');
var noteComponent = (function () {
    function noteComponent(notepadService) {
        this.notepadService = notepadService;
        this.display = false;
        this.selectedNote = 0;
        this.noteToModify = null;
        this.emptyNote = [{
                "title": "",
                "content": "",
                "date": "",
                "id": 0,
                "categorie": {
                    "id": 0,
                    "name": ""
                }
            }];
    }
    //on page init, fill in the note and categorie list.
    noteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notepadService.getNotes().subscribe(function (data) { _this.notes = JSON.parse(data); });
        this.notepadService.getCategories().subscribe(function (data) { _this.categories = JSON.parse(data); });
        // ATTENTION, A SUPPRIMER POUR QUE CA MARCHE AVEC SYMFONY
        this.categories = [{ "id": 1, "nom": "test" }];
        this.notes = [{
                "id": 1,
                "title": "ddf",
                "content": "cece",
                "date": 22114444,
                "categorie": {
                    "id": 1,
                    "nom": "test"
                }
            }];
        //JUSQUE LA
    };
    noteComponent.prototype.modifyNote = function (note) {
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
    };
    noteComponent.prototype.deleteNote = function (note) {
        var index = this.notes.findIndex(function (n) { return (n === note); });
        if (index != -1) {
            this.notes.splice(index, 1);
        }
        this.notepadService.deleteNote(note).subscribe(function (data) { return console.log(data); });
    };
    noteComponent.prototype.submit = function (note) {
        this.display = false;
        if (this.selectedNote == 0) {
            this.notes.push(note);
            this.notepadService.createNote(note).subscribe(function (data) { return console.log(data); });
        }
        else {
            this.notepadService.updateNote(note).subscribe(function (data) { return console.log(data); });
        }
    };
    noteComponent = __decorate([
        core_1.Component({
            selector: 'note',
            templateUrl: 'app/templates/note.html',
            providers: [notepad_service_1.NotepadService],
        }), 
        __metadata('design:paramtypes', [notepad_service_1.NotepadService])
    ], noteComponent);
    return noteComponent;
}());
exports.noteComponent = noteComponent;
//# sourceMappingURL=note.component.js.map