import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SedeModel } from '../models/sede.model';

@Injectable({
  providedIn: 'root'
})
export class SedesService {

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get('http://localhost:8082/sedes')
  }

  guardar(s:SedeModel){
    return this.http.post('http://localhost:8082/sedes/guardar-sede/',s);
  }

  eliminar(id:any){
    return this.http.delete('http://localhost:8082/sedes/eliminar-sede/'+id)
  }

}
