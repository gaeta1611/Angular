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
var categorieComponent = (function () {
    function categorieComponent() {
        this.display = false;
        this.selectedCat = 0;
        this.catToModify = null;
        this.emptyCat = [{
                "id": 0,
                "name": ""
            }];
        this.categories = [{
                "id": 2,
                "name": "remarque" }, {
                "id": 3,
                "name": "todo"
            }];
    }
    categorieComponent.prototype.SubmitEvent = function (cat) {
        this.display = false;
    };
    categorieComponent.prototype.deleteCat = function (cat) {
        var index = this.categories.findIndex(function (n) { return (n === cat); });
        if (index != -1) {
            this.categories.splice(index, 1);
        }
    };
    categorieComponent.prototype.modifyCat = function (cat) {
        if (this.display == true && this.selectedCat == cat.id) {
            this.display = false;
        }
        else if (this.display == true && this.selectedCat != cat.id) {
            this.selectedCat = cat.id;
            this.catToModify = cat;
        }
        else {
            this.display = !this.display;
            this.selectedCat = cat.id;
            this.catToModify = cat;
        }
    };
    categorieComponent = __decorate([
        core_1.Component({
            selector: 'categories',
            templateUrl: 'app/templates/categorie.html',
        }), 
        __metadata('design:paramtypes', [])
    ], categorieComponent);
    return categorieComponent;
}());
exports.categorieComponent = categorieComponent;
//# sourceMappingURL=categorie.component.js.map