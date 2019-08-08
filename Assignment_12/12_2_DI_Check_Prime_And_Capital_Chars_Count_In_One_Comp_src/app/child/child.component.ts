import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  str = "";
  count = 0;
  num = 0;
  message = "";

  constructor(private numberService: NumberService, private stringService: StringService) { }

  ngOnInit() {
  }

  onNumInput(){
    let flag = this.numberService.ChkPrime(this.num);

    if (flag){
      this.message = " is Prime Number";
    } else {
      this.message = " is not Prime Number";
    }
  }

  onCharInput(){
    this.count = this.stringService.CountCapital(this.str);
  }

}
