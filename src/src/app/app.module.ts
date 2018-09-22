import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

const routes: Routes = [
  { path: 'contact-manager', loadChildren: './contact-manager/contact-manager.module#ContactManagerModule'},
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule'},
  { path: '**', redirectTo: 'contact-manager'}
];

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
