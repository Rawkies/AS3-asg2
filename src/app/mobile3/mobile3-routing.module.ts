import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mobile3Page } from './mobile3.page';

const routes: Routes = [
  {
    path: '',
    component: Mobile3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mobile3PageRoutingModule {}
