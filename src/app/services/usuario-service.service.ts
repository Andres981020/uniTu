import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor( private http: HttpClient) {
  }

  listar(){
    return this.http.get('http://localhost:8080/usuarios');
  }

  eliminar(id:any){
    return this.http.delete('http://localhost:8080/usuarios/eliminar-usuario/'+id)
  }
}
 