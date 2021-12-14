import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { } 

  popupSedes(data: any): string{
    return `
      <p>
        Nombre     :  ${data.nombre_sede} <br>
        Estado     : 0${data.estado} - Activa <br>
        Ciudad     : 0${data.id_ciudad} - Tuluá <br>
        Coordenadas: ${data.latitud}, ${data.longitud}<br>
      </p>
    `
  }
}
