import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PitstopyPageRoutingModule } from './pitstopy-routing.module';

import { PitstopyPage } from './pitstopy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PitstopyPageRoutingModule
  ],
  declarations: [PitstopyPage]
})
export class PitstopyPageModule {}
