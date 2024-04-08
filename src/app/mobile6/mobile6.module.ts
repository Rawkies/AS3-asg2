import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mobile6PageRoutingModule } from './mobile6-routing.module';

import { Mobile6Page } from './mobile6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mobile6PageRoutingModule
  ],
  declarations: [Mobile6Page]
})
export class Mobile6PageModule {}
