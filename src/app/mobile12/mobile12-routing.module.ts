import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mobile12Page } from './mobile12.page';

const routes: Routes = [
  {
    path: '',
    component: Mobile12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mobile12PageRoutingModule {}
