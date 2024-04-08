import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mobile15Page } from './mobile15.page';

const routes: Routes = [
  {
    path: '',
    component: Mobile15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mobile15PageRoutingModule {}
