import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mobile16PageRoutingModule } from './mobile16-routing.module';

import { Mobile16Page } from './mobile16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mobile16PageRoutingModule
  ],
  declarations: [Mobile16Page]
})
export class Mobile16PageModule {}
