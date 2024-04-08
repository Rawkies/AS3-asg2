import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mobile2Page } from './mobile2.page';

const routes: Routes = [
  {
    path: '',
    component: Mobile2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mobile2PageRoutingModule {}
