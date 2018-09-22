import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { ContactManagerAppComponent } from './contact-manager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const routes: Routes = [
  { path: '', component: ContactManagerAppComponent,
    children: [
      { path: '', component:  MainContentComponent }
    ] },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)  
  ],
  declarations: [ContactManagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent]
})
export class ContactManagerModule { }