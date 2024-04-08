import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mobile18PageRoutingModule } from './mobile18-routing.module';

import { Mobile18Page } from './mobile18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mobile18PageRoutingModule
  ],
  declarations: [Mobile18Page]
})
export class Mobile18PageModule {}
