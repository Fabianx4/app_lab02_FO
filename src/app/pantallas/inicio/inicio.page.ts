import { Component, OnInit } from '@angular/core';

interface Componente {
  icono: string;
  nombre: string;
  direccion: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente [] = [
    {
      icono: 'person',
      nombre: "Registro Usuarios",
      direccion: '/registro-usuario'
    },
    {
      icono: 'people',
      nombre: "Lista de usuarios",
      direccion: '/lista-usuario'
    },
    {
      icono: 'add-circle-outline',
      nombre: "Asignar egreso",
      direccion: '/asignar-egreso'
    },
    {
      icono: 'list',
      nombre: "Lista de egresos",
      direccion: '/listar-egreso'
    },
    {
      icono: 'search',
      nombre: "Buscar egresos de usuarios",
      direccion: '/buscar-egreso-usuario'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
