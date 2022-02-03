import { Component, OnInit } from '@angular/core';
import { GrupoModel } from 'src/app/models/grupo.model';
import { GruposService } from 'src/app/services/grupos.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styles: [
  ]
})
export class GruposComponent implements OnInit {

  grupos: GrupoModel[] = [];

  constructor(private service: GruposService) {

    this.service.listar().subscribe((data:any) => {
      this.grupos = data;
      console.log(data);
      
    })

  }

  ngOnInit(): void {
  }

  eliminar(id:any){
    this.service.eliminar(id).subscribe(data=>{
      console.log(data);
      
    })
  }

}
