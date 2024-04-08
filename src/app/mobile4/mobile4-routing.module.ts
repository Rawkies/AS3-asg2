import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mobile4Page } from './mobile4.page';

const routes: Routes = [
  {
    path: '',
    component: Mobile4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mobile4PageRoutingModule {}
