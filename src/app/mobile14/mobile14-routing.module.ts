import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mobile14Page } from './mobile14.page';

const routes: Routes = [
  {
    path: '',
    component: Mobile14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mobile14PageRoutingModule {}
