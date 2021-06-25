import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarEgresoUsuarioPage } from './buscar-egreso-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarEgresoUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarEgresoUsuarioPageRoutingModule {}
