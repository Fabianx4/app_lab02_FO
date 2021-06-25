import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../../servicios/formulario.service'

export class EnviarDatos{

  constructor(
    public nombre: string,
    public apellido: string,
    public rut: string,
    public correo: string,
    public password: string
  ){}
}

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {

  datos_registro;

  constructor(private formularioService: FormularioService) {
    this.datos_registro = new EnviarDatos("", "", "", "", "");
  }

  ngOnInit() {
  }

  enviardatos(){
    this.formularioService.registrarFormulario(this.datos_registro).subscribe(
    (response:any)=>{
      if(response.registro){
        alert("Datos registrados correctamente");
      }else{
        alert("Datos no registrados")
      }
    },
    error=>{
      alert("Error de registro")
    }
    )
    console.log("Datos del registro: ", this.datos_registro)
  }

}
