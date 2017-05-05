import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { createNoteComponent } from './createNote.component';
import { createCategorieComponent } from './createCategorie.component';
import { noteComponent } from './note.component';
import { categorieComponent } from './categorie.component';



const appRoutes: Routes = [
  { path: '', redirectTo: 'note', pathMatch: 'full'},
  { path: 'note', component: noteComponent},
  { path: 'categorie', component: categorieComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes),
    HttpModule],
  declarations: [ AppComponent, createNoteComponent,
    createCategorieComponent, noteComponent,   categorieComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
