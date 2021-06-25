import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  backend = environment.backend+"/usuario/crear-usuario";

  constructor( private http: HttpClient ) { }

  registrarFormulario(datos_registro){
    return this.http.post(`${this.backend}/usuario/crear-usuario`, datos_registro);
  }

  obtenerRegistroFormulario(){
    return this.http.get(`${this.backend}/usuario/obtener-usuarios`);

  }

}
