import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-przycisk',
  templateUrl: './przycisk.component.html',
  styleUrls: ['./przycisk.component.scss']
})
export class PrzyciskComponent {
  @Input() buttonColor: string = 'domyslny-kolor-przycisku';
  @Output() clicked = new EventEmitter<void>();

  onClick() {
    this.clicked.emit();
  }
}
