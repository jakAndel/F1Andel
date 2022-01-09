import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PoradiJezdcuPageRoutingModule } from './poradi-jezdcu-routing.module';

import { PoradiJezdcuPage } from './poradi-jezdcu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PoradiJezdcuPageRoutingModule
  ],
  declarations: [PoradiJezdcuPage]
})
export class PoradiJezdcuPageModule {}
