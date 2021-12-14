import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styles: [
  ]
})
export class PageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
