import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService {

  constructor() { }

  Addition(num1, num2){
    return num1 + num2;
  }
  Subtraction(num1, num2){
    return num1 - num2;
  }
  

}
