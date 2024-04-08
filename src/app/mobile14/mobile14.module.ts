import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mobile14PageRoutingModule } from './mobile14-routing.module';

import { Mobile14Page } from './mobile14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mobile14PageRoutingModule
  ],
  declarations: [Mobile14Page]
})
export class Mobile14PageModule {}
