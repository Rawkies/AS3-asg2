import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mobile4PageRoutingModule } from './mobile4-routing.module';

import { Mobile4Page } from './mobile4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mobile4PageRoutingModule
  ],
  declarations: [Mobile4Page]
})
export class Mobile4PageModule {}
