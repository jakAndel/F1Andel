import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'kvalifikace',
    loadChildren: () => import('./pages/kvalifikace/kvalifikace.module').then( m => m.KvalifikacePageModule)
  },
  {
    path: 'pitstopy',
    loadChildren: () => import('./pages/pitstopy/pitstopy.module').then( m => m.PitstopyPageModule)
  },
  {
    path: 'laptimes',
    loadChildren: () => import('./pages/laptimes/laptimes.module').then( m => m.LaptimesPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./pages/results/results.module').then( m => m.ResultsPageModule)
  },
  {
    path: 'kontakt',
    loadChildren: () => import('./pages/kontakt/kontakt.module').then( m => m.KontaktPageModule)
  },
  {
    path: 'homepage',
    loadChildren: () => import('./pages/homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'poradi-jezdcu',
    loadChildren: () => import('./pages/poradi-jezdcu/poradi-jezdcu.module').then( m => m.PoradiJezdcuPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
