import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mobile',
    loadChildren: () => import('./mobile/mobile.module').then( m => m.MobilePageModule)
  },
  {
    path: 'mobile2',
    loadChildren: () => import('./mobile2/mobile2.module').then( m => m.Mobile2PageModule)
  },
  {
    path: 'mobile3',
    loadChildren: () => import('./mobile3/mobile3.module').then( m => m.Mobile3PageModule)
  },
  {
    path: 'mobile4',
    loadChildren: () => import('./mobile4/mobile4.module').then( m => m.Mobile4PageModule)
  },
  {
    path: 'mobile5',
    loadChildren: () => import('./mobile5/mobile5.module').then( m => m.Mobile5PageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
