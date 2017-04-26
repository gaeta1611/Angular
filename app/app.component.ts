import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/index.html',
})
export class AppComponent  {

    note = [{
      "titre" : "Application ",
      "contenu" : "Nous sommes entrain de creer",
      "categorie" :"hh"
    }]
}
