import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mobile5Page } from './mobile5.page';

const routes: Routes = [
  {
    path: '',
    component: Mobile5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mobile5PageRoutingModule {}
