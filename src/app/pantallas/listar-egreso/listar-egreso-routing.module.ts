import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarEgresoPage } from './listar-egreso.page';

const routes: Routes = [
  {
    path: '',
    component: ListarEgresoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarEgresoPageRoutingModule {}
