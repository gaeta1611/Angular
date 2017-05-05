"use strict";
var Note = (function () {
    function Note(id, title, content, date, categorie) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.date = date;
        this.categorie = categorie;
    }
    return Note;
}());
exports.Note = Note;
//# sourceMappingURL=note.js.map