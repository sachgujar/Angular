import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {

  constructor() { }

  CountCapital(str){
   return  str.length - str.replace(/[A-Z]/g,'').length;
  }
}
