import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pantallas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./pantallas/registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'lista-usuario',
    loadChildren: () => import('./pantallas/lista-usuario/lista-usuario.module').then( m => m.ListaUsuarioPageModule)
  },
  {
    path: 'asignar-egreso',
    loadChildren: () => import('./pantallas/asignar-egreso/asignar-egreso.module').then( m => m.AsignarEgresoPageModule)
  },
  {
    path: 'listar-egreso',
    loadChildren: () => import('./pantallas/listar-egreso/listar-egreso.module').then( m => m.ListarEgresoPageModule)
  },
  {
    path: 'buscar-egreso-usuario',
    loadChildren: () => import('./pantallas/buscar-egreso-usuario/buscar-egreso-usuario.module').then( m => m.BuscarEgresoUsuarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
