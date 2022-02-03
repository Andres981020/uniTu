import { Component, OnInit } from '@angular/core';
import { CursoModel } from 'src/app/models/curso.model';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styles: [
  ]
})
export class CursosComponent implements OnInit {

  cursos: CursoModel[] = [];

  constructor( private service: CursosService) {
    this.service.listar().subscribe((data:any)=>{
      console.log(data);
      
      this.cursos = data;
    })
   }

  ngOnInit(): void {
  }

  eliminar(id:any){
    this.service.eliminar(id).subscribe(data => {
      console.log(data);
      
    })
      
  }

}
