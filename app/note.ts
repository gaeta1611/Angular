import { Categorie } from './categorie';

export class Note  {
    constructor(public id: number, public title: string, public content: string,
        public date: number, public categorie: Categorie,) { }
}
