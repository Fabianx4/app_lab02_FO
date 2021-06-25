import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarEgresoUsuarioPageRoutingModule } from './buscar-egreso-usuario-routing.module';

import { BuscarEgresoUsuarioPage } from './buscar-egreso-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarEgresoUsuarioPageRoutingModule
  ],
  declarations: [BuscarEgresoUsuarioPage]
})
export class BuscarEgresoUsuarioPageModule {}
