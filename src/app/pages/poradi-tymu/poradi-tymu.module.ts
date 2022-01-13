import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoradiTymuPageRoutingModule } from './poradi-tymu-routing.module';

import { PoradiTymuPage } from './poradi-tymu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoradiTymuPageRoutingModule
  ],
  declarations: [PoradiTymuPage]
})
export class PoradiTymuPageModule {}
