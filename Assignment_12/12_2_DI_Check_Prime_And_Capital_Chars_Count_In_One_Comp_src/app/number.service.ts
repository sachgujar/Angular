import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  ChkPrime(num: number){

   let flag = true;

   for(let i = 2; i <= num / 2; i++){     
    if (num % i == 0){
      flag = false;
      break;
    }
  }
  return flag;
}
}
