import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolServiceService {

  constructor(private http: HttpClient) { }


  listar(){
    return this.http.get('http://localhost:8081/roles');
  }

  eliminar(id:any){
    return this.http.delete('http://localhost:8081/roles/eliminar-rol/'+id)
  }

}
