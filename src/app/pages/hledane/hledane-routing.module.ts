import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HledanePage } from './hledane.page';

const routes: Routes = [
  {
    path: '',
    component: HledanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HledanePageRoutingModule {}
