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
var forms_1 = require('@angular/forms');
var notepad_service_1 = require('./notepad.service');
var createNoteComponent = (function () {
    function createNoteComponent(notepadService) {
        this.notepadService = notepadService;
        //pour plus tard
        this.cancelEvent = new core_1.EventEmitter();
        this.submitEvent = new core_1.EventEmitter();
    }
    createNoteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.noteFormGroup = new forms_1.FormGroup({
            form_title: new forms_1.FormControl(),
            form_content: new forms_1.FormControl()
        });
        this.notepadService.getCategories().subscribe(function (data) { _this.categories = JSON.parse(data); });
        // A SUPPRIMER
        this.categories = [{ "id": 1, "nom": "test" }];
        //JUSQU'ICI
    };
    createNoteComponent.prototype.cancel = function () {
        this.cancelEvent.emit();
    };
    createNoteComponent.prototype.submit = function () {
        this.submitEvent.emit(this.modifiedNote);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], createNoteComponent.prototype, "cancelEvent", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], createNoteComponent.prototype, "submitEvent", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], createNoteComponent.prototype, "modifiedNote", void 0);
    createNoteComponent = __decorate([
        core_1.Component({
            selector: 'nouvelleNote',
            templateUrl: 'app/templates/create_note.html',
            providers: [notepad_service_1.NotepadService],
        }), 
        __metadata('design:paramtypes', [notepad_service_1.NotepadService])
    ], createNoteComponent);
    return createNoteComponent;
}());
exports.createNoteComponent = createNoteComponent;
//# sourceMappingURL=createNote.component.js.map