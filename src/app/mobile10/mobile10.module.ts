import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mobile10PageRoutingModule } from './mobile10-routing.module';

import { Mobile10Page } from './mobile10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mobile10PageRoutingModule
  ],
  declarations: [Mobile10Page]
})
export class Mobile10PageModule {}
