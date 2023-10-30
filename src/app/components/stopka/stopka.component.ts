import { Component } from '@angular/core';

@Component({
  selector: 'app-stopka',
  templateUrl: './stopka.component.html',
  styleUrls: ['./stopka.component.scss']
})
export class StopkaComponent {
  user = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log(this.user);
  }
}
