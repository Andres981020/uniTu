import { Component, OnInit } from '@angular/core';
import { SedeModel } from 'src/app/models/sede.model';
import { SedesService } from 'src/app/services/sedes.service';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styles: [
  ]
})
export class SedesComponent implements OnInit {

  sedes: SedeModel[] = [];

  pasarPag: boolean = false;

  constructor( private service: SedesService) {
    this.listar();
  }

  ngOnInit(): void {
  }

  listar(){
    this.service.listar().subscribe((data:any) => {
      console.log(data);

      this.sedes = data;
      
    })
  }

  guardar(){
    this.service.guardar
  }

  eliminar(id:any){
    this.service.eliminar(id).subscribe(bool => {
      console.log(bool);
    })
  }

  pasar(){
    this.pasarPag = true;
  }

  datos(){
  }

}
