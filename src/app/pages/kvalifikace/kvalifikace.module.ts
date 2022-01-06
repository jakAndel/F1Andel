import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KvalifikacePageRoutingModule } from './kvalifikace-routing.module';

import { KvalifikacePage } from './kvalifikace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KvalifikacePageRoutingModule
  ],
  declarations: [KvalifikacePage]
})
export class KvalifikacePageModule {}
