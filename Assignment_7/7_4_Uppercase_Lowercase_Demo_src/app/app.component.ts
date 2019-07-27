import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['div{text-align: center;}']
})
export class AppComponent {
    title =  "Marvellous Infosystems";

  upperCase(){
   this.title =  this.title.toUpperCase();
  }

  lowerCase(){
   this.title =  this.title.toLowerCase();
  }
}
