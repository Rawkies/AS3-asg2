import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mobile11Page } from './mobile11.page';

const routes: Routes = [
  {
    path: '',
    component: Mobile11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mobile11PageRoutingModule {}
