import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-sekcja-mapa',
  templateUrl: './sekcja-mapa.component.html',
  styleUrls: ['./sekcja-mapa.component.scss']
})
export class SekcjaMapaComponent implements AfterViewInit {
  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [53.12768, 23.15968],
      zoom: 18
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 23,
      minZoom: 6,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    const marker = L.marker([53.12751, 23.16034]).addTo(this.map);

  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
