import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mobile8Page } from './mobile8.page';

const routes: Routes = [
  {
    path: '',
    component: Mobile8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mobile8PageRoutingModule {}
