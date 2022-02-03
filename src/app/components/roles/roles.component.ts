import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RolModel } from 'src/app/models/rol.model';
import { RolServiceService } from 'src/app/services/rol-service.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles: RolModel[] = [];

  constructor( private rolService: RolServiceService, private http: HttpClient) { 

    //this.http.get('http://localhost:8081/roles')
    this.rolService.listar().subscribe((data:any) => {
    
      this.roles = data;
      console.log(this.roles); 
    
    })
  }
  ngOnInit(): void {
  }

  eliminar(id:any){
    this.rolService.eliminar(id).subscribe(bool =>{
      console.log(bool);
    })
  }

}
