import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mobile13PageRoutingModule } from './mobile13-routing.module';

import { Mobile13Page } from './mobile13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mobile13PageRoutingModule
  ],
  declarations: [Mobile13Page]
})
export class Mobile13PageModule {}
