import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mobile17PageRoutingModule } from './mobile17-routing.module';

import { Mobile17Page } from './mobile17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mobile17PageRoutingModule
  ],
  declarations: [Mobile17Page]
})
export class Mobile17PageModule {}
