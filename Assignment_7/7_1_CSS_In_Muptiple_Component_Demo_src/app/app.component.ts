import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-first></app-first>
   <app-second></app-second>`,
  styles: ['h1{ color: blue;} div{color: red;}']
})
export class AppComponent {
  title = 'Marvellous Infosystem';
  institueName = "";
}
