import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mobile9Page } from './mobile9.page';

const routes: Routes = [
  {
    path: '',
    component: Mobile9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mobile9PageRoutingModule {}
