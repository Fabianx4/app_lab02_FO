import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignarEgresoPageRoutingModule } from './asignar-egreso-routing.module';

import { AsignarEgresoPage } from './asignar-egreso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignarEgresoPageRoutingModule
  ],
  declarations: [AsignarEgresoPage]
})
export class AsignarEgresoPageModule {}
