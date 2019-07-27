import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-new-comp></app-new-comp>`,
  styles: ['h1{ color: blue;} div{color: red;}']
})
export class AppComponent {
  title = 'Marvellous Infosystem';
  institueName = "";
}
