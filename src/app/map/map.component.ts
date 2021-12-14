import { AfterViewInit, Component } from '@angular/core';

import * as L from 'leaflet';

import { MarkerService } from '../services/marker.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  private map: any; 
/*
  let property = dict.find((e) => e.name === eventKey)?.prop
// property will either be a string or undefined
changeProp(property);
*/
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 4.091750, -76.195938 ],
      zoom: 14
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map); 
  }

  constructor( private marker: MarkerService) { }
  ngAfterViewInit(): void {
    this.initMap();
    this.marker.sedesMarkers(this.map); 
  }

}
