import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mobile18Page } from './mobile18.page';

const routes: Routes = [
  {
    path: '',
    component: Mobile18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mobile18PageRoutingModule {}
