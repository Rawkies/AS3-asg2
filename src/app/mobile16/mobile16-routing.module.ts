import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mobile16Page } from './mobile16.page';

const routes: Routes = [
  {
    path: '',
    component: Mobile16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mobile16PageRoutingModule {}
