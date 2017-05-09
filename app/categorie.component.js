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
var categorieComponent = (function () {
    function categorieComponent(notepadService) {
        this.notepadService = notepadService;
        this.display = false;
        this.selectedCategorie = 0;
        this.categorieToModify = null;
        this.emptyCategorie = [{
                "id": 0,
                "nom": ""
            }];
    }
    //on page init, fill in the categorie list.
    categorieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notepadService.getCategories().subscribe(function (data) { _this.categories = JSON.parse(data); });
        // ATTENTION, A SUPPRIMER POUR QUE CA MARCHE AVEC SYMFONY
        this.categories = [{ "id": 1, "nom": "test" }];
        //JUSQUE LA
    };
    categorieComponent.prototype.submit = function (categorie) {
        this.display = false;
        if (this.selectedCategorie == 0) {
            this.categories.push(categorie);
            this.notepadService.createCategorie(categorie).subscribe(function (data) { return console.log(data); });
        }
        else {
            this.notepadService.updateCategorie(categorie).subscribe(function (data) { return console.log(data); });
        }
    };
    categorieComponent.prototype.deleteCategorie = function (categorie) {
        var index = this.categories.findIndex(function (n) { return (n === categorie); });
        if (index != -1) {
            this.categories.splice(index, 1);
        }
        this.notepadService.deleteCategorie(categorie).subscribe(function (data) { return console.log(data); });
    };
    categorieComponent.prototype.modifyCategorie = function (categorie) {
        if (this.display == true && this.selectedCategorie == categorie.id) {
            this.display = false;
        }
        else if (this.display == true && this.selectedCategorie != categorie.id) {
            this.selectedCategorie = categorie.id;
            this.categorieToModify = categorie;
        }
        else {
            this.display = !this.display;
            this.selectedCategorie = categorie.id;
            this.categorieToModify = categorie;
        }
    };
    categorieComponent = __decorate([
        core_1.Component({
            selector: 'categories',
            templateUrl: 'app/templates/categorie.html',
            providers: [notepad_service_1.NotepadService],
        }), 
        __metadata('design:paramtypes', [notepad_service_1.NotepadService])
    ], categorieComponent);
    return categorieComponent;
}());
exports.categorieComponent = categorieComponent;
//# sourceMappingURL=categorie.component.js.map