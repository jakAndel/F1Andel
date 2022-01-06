import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaptimesPageRoutingModule } from './laptimes-routing.module';

import { LaptimesPage } from './laptimes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaptimesPageRoutingModule
  ],
  declarations: [LaptimesPage]
})
export class LaptimesPageModule {}
