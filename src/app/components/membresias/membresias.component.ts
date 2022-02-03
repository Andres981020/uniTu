import { Component, OnInit } from '@angular/core';
import { MembresiaModel } from 'src/app/models/membresia.model';
import { MembresiasService } from 'src/app/services/membresias.service';

@Component({
  selector: 'app-membresias',
  templateUrl: './membresias.component.html',
  styles: [
  ]
})
export class MembresiasComponent implements OnInit {

  membresias: MembresiaModel[] = [];

  constructor(private service: MembresiasService) {

    this.service.listar().subscribe((data:any) => {
      this.membresias = data;
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
