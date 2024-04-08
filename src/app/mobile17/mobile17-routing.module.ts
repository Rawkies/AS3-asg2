import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mobile17Page } from './mobile17.page';

const routes: Routes = [
  {
    path: '',
    component: Mobile17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mobile17PageRoutingModule {}
