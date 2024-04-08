import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mobile5PageRoutingModule } from './mobile5-routing.module';

import { Mobile5Page } from './mobile5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mobile5PageRoutingModule
  ],
  declarations: [Mobile5Page]
})
export class Mobile5PageModule {}
