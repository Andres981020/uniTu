import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor( 
    private http: HttpClient, 
    private router: Router) { }

  ngOnInit(): void {
  }

  roles(){
    this.router.navigateByUrl('/roles')
  }

  usuarios(){
    this.router.navigateByUrl('/usuarios')
  }

  sedes(){
    this.router.navigateByUrl('/sedes')
  }

  cursos(){
    this.router.navigateByUrl('/cursos')
  }

  membresias(){
    this.router.navigateByUrl('/membresias')
  }

  grupos(){
    this.router.navigateByUrl('/grupos')
  }
}
