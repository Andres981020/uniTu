import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembresiasService {

  constructor( private http: HttpClient) {
  }

  listar(){
    return this.http.get('http://localhost:8087/membresias');
  }
}
