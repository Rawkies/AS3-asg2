import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mobile7PageRoutingModule } from './mobile7-routing.module';

import { Mobile7Page } from './mobile7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mobile7PageRoutingModule
  ],
  declarations: [Mobile7Page]
})
export class Mobile7PageModule {}
