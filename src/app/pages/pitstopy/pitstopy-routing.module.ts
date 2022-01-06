import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PitstopyPage } from './pitstopy.page';

const routes: Routes = [
  {
    path: '',
    component: PitstopyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PitstopyPageRoutingModule {}
