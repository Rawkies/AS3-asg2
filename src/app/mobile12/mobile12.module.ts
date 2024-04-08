import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mobile12PageRoutingModule } from './mobile12-routing.module';

import { Mobile12Page } from './mobile12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mobile12PageRoutingModule
  ],
  declarations: [Mobile12Page]
})
export class Mobile12PageModule {}
