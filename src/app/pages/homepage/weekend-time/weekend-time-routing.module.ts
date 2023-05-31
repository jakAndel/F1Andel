import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeekendTimePage } from './weekend-time.page';

const routes: Routes = [
  {
    path: '',
    component: WeekendTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeekendTimePageRoutingModule {}
