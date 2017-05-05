import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Note } from './note';
import { Categorie } from './categorie';

// Import RxJs required operator methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NotepadService {
    constructor (private http: Http) {}
    private notesUrl =
    'http://localhost/applicationWeb/my_project/web/app_dev.php/api/note';
    private categoriesUrl =
    'http://localhost/applicationWeb/my_project/web/app_dev.php/api/categorie';

    getNotes() {
        return this.http.get(this.notesUrl)
            .map((res:Response) => res.json());
    }

    getCategories() {
        return this.http.get(this.categoriesUrl)
            .map((res:Response) => res.json());
    }

    getNote(note : Number) {
        return this.http.get(this.notesUrl + "/" + note)
                        .map((res:Response) => res.json());
    }

    getCategorie(categorie : Number) {
        return this.http.get(this.categoriesUrl + "/" + categorie)
                        .map((res:Response) => res.json());
    }

    createNote(note : Note) {
        return this.http.post(this.notesUrl, this.serializeNote(note));
    }

    createCategorie(categorie : Categorie) {
        return this.http.post(this.categoriesUrl,
            this.serializeCategorie(categorie));
    }

    updateNote(note : Note) {
        return this.http.put(this.notesUrl + "/" +
            note.id, this.serializeNote(note));
    }

    updateCategorie(categorie : Categorie) {
        return this.http.put(this.categoriesUrl + "/" +
            categorie.id, this.serializeCategorie(categorie));
    }

    deleteNote(note : Note) {
        return this.http.delete(this.notesUrl + "/" + note.id);
    }

    deleteCategorie(categorie : Categorie) {
        return this.http.delete(this.categoriesUrl + "/" + categorie.id);
    }

    private serializeNote(note : Note) {
        return JSON.stringify({
            'title': note.title,
            'content': note.content,
            'categorie': note.categorie.id,
        });
    }

    private serializeCategorie(categorie : Categorie) {
        return JSON.stringify({
            'id': categorie.id,
            'nom' : categorie.nom,
        });
    }
}
