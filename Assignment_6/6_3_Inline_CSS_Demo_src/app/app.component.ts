import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
    <h1>
      Welcome to {{ title }}!
    </h1>
  
    <label>Student Name: </label>
    <input type="text" />
    
  </div>`,
  styles: ['h1{ color: blue;} div{color: red;}']
})
export class AppComponent {
  title = 'Marvellous Infosystem';
  institueName = "";
}
