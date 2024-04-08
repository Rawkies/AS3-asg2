import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mobile15PageRoutingModule } from './mobile15-routing.module';

import { Mobile15Page } from './mobile15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mobile15PageRoutingModule
  ],
  declarations: [Mobile15Page]
})
export class Mobile15PageModule {}
