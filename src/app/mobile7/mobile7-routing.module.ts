import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mobile7Page } from './mobile7.page';

const routes: Routes = [
  {
    path: '',
    component: Mobile7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mobile7PageRoutingModule {}
