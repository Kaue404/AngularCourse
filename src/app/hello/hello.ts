import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hello',
  styleUrl: './hello.css',
  templateUrl: './hello.html',
})
export class Hello {
  protected title = 'Helcome to Angular Course!';

  protected isDisabled = false;

  protected onClick() {
    console.log('Button clicked!');
    this.isDisabled = !this.isDisabled;
  }
}
