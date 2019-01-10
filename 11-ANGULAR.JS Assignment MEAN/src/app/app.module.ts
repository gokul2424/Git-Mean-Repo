import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent }  from './app.component';
import { AddComponent } from './add.component';
import { EditComponent} from './edit.component';

const appRoutes:Routes =
[
  {
    path:'Add', component: AddComponent
  },
  {
    path:'Edit', component: EditComponent
  }
];


@NgModule({
  imports:      [ BrowserModule ,RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent ,AddComponent, EditComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
