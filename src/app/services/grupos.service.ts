import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get('http://localhost:8085/grupos');
  }

  eliminar(id:any){
    return this.http.delete('http://localhost:8085/grupos/eliminar-grupo/'+id)
  }
}
