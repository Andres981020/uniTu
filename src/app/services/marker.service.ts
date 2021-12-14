import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import * as L from 'leaflet';
import { PopupService } from './popup.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  sedes: string ='http://localhost:8082/sedes';

  constructor( 
    private http: HttpClient,
    private popup: PopupService ) { }

  sedesMarkers(map: L.Map): void { 


    this.http.get('http://localhost:8082/sedes').subscribe((res: any) => {    
      console.log(res);
        
      for (const s of res) {
        const lon = s.longitud;
        const lat = s.latitud;
        const marker = L.marker([lat, lon]);

        marker.bindPopup(this.popup.popupSedes(s))
        marker.addTo(map);
      }
    });
  }
}
