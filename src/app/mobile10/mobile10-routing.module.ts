import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mobile10Page } from './mobile10.page';

const routes: Routes = [
  {
    path: '',
    component: Mobile10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mobile10PageRoutingModule {}
