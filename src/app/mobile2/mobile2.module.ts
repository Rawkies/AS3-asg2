import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mobile2PageRoutingModule } from './mobile2-routing.module';

import { Mobile2Page } from './mobile2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mobile2PageRoutingModule
  ],
  declarations: [Mobile2Page]
})
export class Mobile2PageModule {}
