import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HledanePageRoutingModule } from './hledane-routing.module';

import { HledanePage } from './hledane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HledanePageRoutingModule
  ],
  declarations: [HledanePage]
})
export class HledanePageModule {}
