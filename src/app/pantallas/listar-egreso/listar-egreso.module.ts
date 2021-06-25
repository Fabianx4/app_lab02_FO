import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarEgresoPageRoutingModule } from './listar-egreso-routing.module';

import { ListarEgresoPage } from './listar-egreso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarEgresoPageRoutingModule
  ],
  declarations: [ListarEgresoPage]
})
export class ListarEgresoPageModule {}
