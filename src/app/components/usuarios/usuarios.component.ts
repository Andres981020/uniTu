import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.models';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: UsuarioModel[] = [];

  constructor( private usuarioService: UsuarioServiceService) {

    this.usuarioService.listar().subscribe((data:any) => {
      this.usuarios = data;
      console.log(this.usuarios);
      
    })

   }

  ngOnInit(): void {
  }

  eliminar(id:any){
    this.usuarioService.eliminar(id).subscribe(bool=>{
      console.log(bool);  
    })
  }

}
