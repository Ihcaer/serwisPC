import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GaleriaZdjecService {
  public zdjecia: string[] = ['../../../assets/images/galeria/galeria1.jpg', '../../../assets/images/galeria/galeria2.jpg', '../../../assets/images/galeria/galeria3.jpg',
    '../../../assets/images/galeria/galeria4.jpg', '../../../assets/images/galeria/galeria5.jpg'];
  private aktualneZdjecieIndex: number = 0;

  indexDoZmiany: number = 0;

  getAktualneZdjecie(): string {
    return this.zdjecia[this.aktualneZdjecieIndex];
  }

  przewinDoPoprzedniegoZdjecia() {
    if (this.aktualneZdjecieIndex > 0) {
      this.aktualneZdjecieIndex--;
      this.indexDoZmiany--;
    } else if (this.aktualneZdjecieIndex == 0) {
      this.aktualneZdjecieIndex = this.aktualneZdjecieIndex + 4;
      this.indexDoZmiany = this.indexDoZmiany + 4;
    }
  }

  przewinDoNastepnegoZdjecia() {
    if (this.aktualneZdjecieIndex < this.zdjecia.length - 1) {
      this.aktualneZdjecieIndex++;
      this.indexDoZmiany++;
    } else if (this.aktualneZdjecieIndex == this.zdjecia.length - 1) {
      this.aktualneZdjecieIndex = this.aktualneZdjecieIndex - 4;
      this.indexDoZmiany = this.indexDoZmiany - 4;
    }
  }

  galeriaKropkiPrzeniesienie(index: number) {
    switch (index) {
      case 0:
        this.aktualneZdjecieIndex = 0;
        break;
      case 1:
        this.aktualneZdjecieIndex = 1;
        break;
      case 2:
        this.aktualneZdjecieIndex = 2;
        break;
      case 3:
        this.aktualneZdjecieIndex = 3;
        break;
      case 4:
        this.aktualneZdjecieIndex = 4;
        break;
    }
  }

  ustawIndexDoZmiany(index: number) {
    this.indexDoZmiany = index;
  }

  pobierzIndexDoZmiany() {
    return this.indexDoZmiany;
  }
}
