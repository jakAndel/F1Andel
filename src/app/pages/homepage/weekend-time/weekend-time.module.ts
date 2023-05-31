import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeekendTimePageRoutingModule } from './weekend-time-routing.module';

import { WeekendTimePage } from './weekend-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeekendTimePageRoutingModule
  ],
  declarations: [WeekendTimePage]
})
export class WeekendTimePageModule {}
