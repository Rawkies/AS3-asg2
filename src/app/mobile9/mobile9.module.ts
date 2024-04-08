import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mobile9PageRoutingModule } from './mobile9-routing.module';

import { Mobile9Page } from './mobile9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mobile9PageRoutingModule
  ],
  declarations: [Mobile9Page]
})
export class Mobile9PageModule {}
