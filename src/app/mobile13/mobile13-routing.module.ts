import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mobile13Page } from './mobile13.page';

const routes: Routes = [
  {
    path: '',
    component: Mobile13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mobile13PageRoutingModule {}
