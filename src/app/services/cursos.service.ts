import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor( private http: HttpClient) { }

  listar(){
    return this.http.get('http://localhost:8083/cursos');
  }

  eliminar(id:any){
    return this.http.delete('http://localhost:8083/cursos/eliminar-curso/'+id)
  }
}
