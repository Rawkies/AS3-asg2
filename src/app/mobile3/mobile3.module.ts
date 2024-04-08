import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mobile3PageRoutingModule } from './mobile3-routing.module';

import { Mobile3Page } from './mobile3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mobile3PageRoutingModule
  ],
  declarations: [Mobile3Page]
})
export class Mobile3PageModule {}
