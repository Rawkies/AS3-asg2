import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mobile6Page } from './mobile6.page';

const routes: Routes = [
  {
    path: '',
    component: Mobile6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mobile6PageRoutingModule {}
