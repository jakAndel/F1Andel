import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PoradiTymuPage } from './poradi-tymu.page';

const routes: Routes = [
  {
    path: '',
    component: PoradiTymuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PoradiTymuPageRoutingModule {}
