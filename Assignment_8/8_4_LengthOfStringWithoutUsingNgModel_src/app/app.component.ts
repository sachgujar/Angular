import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['div{text-align: center; padding-top: 30px;}']
})
export class AppComponent implements OnInit {
  constructor(){  }
  ngOnInit() {
  }
  title =  "Marvellous Infosystems";
  secondTitle =  "Angular";

  fun(e){
    console.log(e.value);

    this.secondTitle = e.value;
  }
}
