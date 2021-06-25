import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignarEgresoPage } from './asignar-egreso.page';

const routes: Routes = [
  {
    path: '',
    component: AsignarEgresoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignarEgresoPageRoutingModule {}
