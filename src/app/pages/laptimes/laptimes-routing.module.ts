import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaptimesPage } from './laptimes.page';

const routes: Routes = [
  {
    path: '',
    component: LaptimesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaptimesPageRoutingModule {}
