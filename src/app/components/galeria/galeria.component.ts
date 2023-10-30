import { Component, OnInit } from '@angular/core';
import { GaleriaZdjecService } from 'src/app/services/galeria-zdjec.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {
  galeriaKropki = '.';

  constructor(protected galeriaZdjecService: GaleriaZdjecService) { }

  ngOnInit(): void {
    this.automatycznePrzewijanie();
  }

  przewinDoPoprzedniegoZdjecia() {
    this.galeriaZdjecService.przewinDoPoprzedniegoZdjecia();
  }
  przewinDoNastepnegoZdjecia() {
    this.galeriaZdjecService.przewinDoNastepnegoZdjecia();
  }

  galeriaKropkiKlikniecie(index: number) {
    this.galeriaZdjecService.galeriaKropkiPrzeniesienie(index);
    this.galeriaZdjecService.ustawIndexDoZmiany(index);
  }

  private automatycznePrzewijanie() {
    setInterval(() => {
      this.przewinDoNastepnegoZdjecia();
    }, 5000);
  }
}
