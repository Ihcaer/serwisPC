import { Component } from '@angular/core';
import { GaleriaZdjecService } from 'src/app/services/galeria-zdjec.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent {
  constructor(protected galeriaZdjecService: GaleriaZdjecService) { }

  przewinDoPoprzedniegoZdjecia() {
    this.galeriaZdjecService.przewinDoPoprzedniegoZdjecia();
  }

  przewinDoNastepnegoZdjecia() {
    this.galeriaZdjecService.przewinDoNastepnegoZdjecia();
  }
}
