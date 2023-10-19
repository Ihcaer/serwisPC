import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-socjale',
  templateUrl: './socjale.component.html',
  styleUrls: ['./socjale.component.scss']
})
export class SocjaleComponent {
  @Input() socialColor: string = 'domyslny-kolor-sociali';

  facebookIconPath = 'assets/icons/facebook.svg';
  instagramIconPath = 'assets/icons/instagram.svg';
  xIconPath = 'assets/icons/x-twitter.svg';
}
