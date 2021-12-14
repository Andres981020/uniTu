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

  constructor( private service: SedesService) {
    this.service.listar().subscribe((data:any) => {
      console.log(data);

      this.sedes = data;
      
    })
   }

  ngOnInit(): void {
  }



}
