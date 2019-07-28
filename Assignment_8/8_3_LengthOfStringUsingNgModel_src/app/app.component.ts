import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['div{text-align: center; padding-top: 30px;}']
})
export class AppComponent implements OnInit {

  message = "Hello child. I am Your parent i.e. App Component.";
  constructor(){  }
  ngOnInit() {
  }
    title =  "Marvellous Infosystems";
}
