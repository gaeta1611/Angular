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
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
// Import RxJs required operator methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var NotepadService = (function () {
    function NotepadService(http) {
        this.http = http;
        this.notesUrl = 'http://localhost/applicationWeb/my_project/web/app_dev.php/api/note';
        this.categoriesUrl = 'http://localhost/applicationWeb/my_project/web/app_dev.php/api/categorie';
    }
    NotepadService.prototype.getNotes = function () {
        return this.http.get(this.notesUrl)
            .map(function (res) { return res.json(); });
    };
    NotepadService.prototype.getCategories = function () {
        return this.http.get(this.categoriesUrl)
            .map(function (res) { return res.json(); });
    };
    NotepadService.prototype.getNote = function (note) {
        return this.http.get(this.notesUrl + "/" + note)
            .map(function (res) { return res.json(); });
    };
    NotepadService.prototype.getCategorie = function (categorie) {
        return this.http.get(this.categoriesUrl + "/" + categorie)
            .map(function (res) { return res.json(); });
    };
    NotepadService.prototype.createNote = function (note) {
        return this.http.post(this.notesUrl, this.serializeNote(note));
    };
    NotepadService.prototype.createCategorie = function (categorie) {
        return this.http.post(this.categoriesUrl, this.serializeCategorie(categorie));
    };
    NotepadService.prototype.updateNote = function (note) {
        return this.http.put(this.notesUrl + "/" +
            note.id, this.serializeNote(note));
    };
    NotepadService.prototype.updateCategorie = function (categorie) {
        return this.http.put(this.categoriesUrl + "/" +
            categorie.id, this.serializeCategorie(categorie));
    };
    NotepadService.prototype.deleteNote = function (note) {
        return this.http.delete(this.notesUrl + "/" + note.id);
    };
    NotepadService.prototype.deleteCategorie = function (categorie) {
        return this.http.delete(this.categoriesUrl + "/" + categorie.id);
    };
    NotepadService.prototype.serializeNote = function (note) {
        return JSON.stringify({
            'title': note.title,
            'content': note.content,
            'categorie': note.categorie.id,
        });
    };
    NotepadService.prototype.serializeCategorie = function (categorie) {
        return JSON.stringify({
            'id': categorie.id,
            'nom': categorie.nom,
        });
    };
    NotepadService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NotepadService);
    return NotepadService;
}());
exports.NotepadService = NotepadService;
//# sourceMappingURL=notepad.service.js.map