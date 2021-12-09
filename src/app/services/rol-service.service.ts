import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RolModel } from '../models/rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolServiceService {

  constructor(private http: HttpClient) { }


  listar(){
    return this.http.get('http://localhost:8081/roles');
  }

}
