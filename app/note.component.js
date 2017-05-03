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
var noteComponent = (function () {
    function noteComponent() {
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
        this.notes = [{
                "title": "première note",
                "content": "test",
                "date": "22/03",
                "id": 1,
                "categorie": {
                    "id": 1,
                    "name": "remarque"
                }
            }, {
                "title": "Seconde note",
                "content": "test numéro 2",
                "date": "22/04",
                "id": 2,
                "categorie": {
                    "id": 2,
                    "name": "todo"
                }
            }];
    }
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
        // TODO: Use the API tu delete the note
    };
    noteComponent = __decorate([
        core_1.Component({
            selector: 'note',
            //template: '<new-note></new-note>',
            templateUrl: 'app/templates/note.html',
        }), 
        __metadata('design:paramtypes', [])
    ], noteComponent);
    return noteComponent;
}());
exports.noteComponent = noteComponent;
//# sourceMappingURL=note.component.js.map