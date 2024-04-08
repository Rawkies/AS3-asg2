import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mobile8PageRoutingModule } from './mobile8-routing.module';

import { Mobile8Page } from './mobile8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mobile8PageRoutingModule
  ],
  declarations: [Mobile8Page]
})
export class Mobile8PageModule {}
