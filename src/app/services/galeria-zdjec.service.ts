import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaleriaZdjecService {
  private zdjecia: string[] = ['../../../assets/images/galeria/galeria1.jpg', '../../../assets/images/galeria/galeria2.jpg', '../../../assets/images/galeria/galeria3.jpg',
    '../../../assets/images/galeria/galeria4.jpg', '../../../assets/images/galeria/galeria5.jpg'];
  private aktualneZdjecieIndex: number = 0;

  getAktualneZdjecie(): string {
    return this.zdjecia[this.aktualneZdjecieIndex];
  }

  przewinDoPoprzedniegoZdjecia() {
    if (this.aktualneZdjecieIndex > 0) {
      this.aktualneZdjecieIndex--;
    }
  }

  przewinDoNastepnegoZdjecia() {
    if (this.aktualneZdjecieIndex < this.zdjecia.length - 1) {
      this.aktualneZdjecieIndex++;
    }
  }
}
