import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../../servicios/formulario.service'

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.page.html',
  styleUrls: ['./lista-usuario.page.scss'],
})
export class ListaUsuarioPage implements OnInit {

  datos_obtenidos;
  constructor(private formularioService: FormularioService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.obtenerDatosFormulario();
  }

  obtenerDatosFormulario(){
    this.formularioService.obtenerRegistroFormulario().subscribe(
      (response:any) => {
        this.datos_obtenidos = response.registros;
      },
      error => {
        alert("Error")
      }
    )
  }
}
