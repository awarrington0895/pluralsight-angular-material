import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../shared/material.module';
import { DemoRoutingModule } from './demo-routing.module';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    DemoRoutingModule
  ],
  declarations: [ButtonsComponent, FlexboxComponent]
})
export class DemoModule {}
