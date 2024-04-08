import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mobile11PageRoutingModule } from './mobile11-routing.module';

import { Mobile11Page } from './mobile11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mobile11PageRoutingModule
  ],
  declarations: [Mobile11Page]
})
export class Mobile11PageModule {}
