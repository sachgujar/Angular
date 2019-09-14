import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    let operation = args[0];
    let result = false;
    let flag = true;

    switch(operation){
      case 'prime':
        
        for (let i = 2; i <= value/2; i++){          
          if (value % i == 0){
            flag = false;
            break;
          }
        }
        result = flag;
      break;

      case 'perfect':
        let sum = 0;
        for (let i = 1; i <= value/2; i++){
          if (value % i == 0){
            sum = sum + i;
          }
        }
        if (sum == value){
          result = true;
        } else {
          result = false;
        }
      break;

      case 'even':
        flag = false;
        if (value % 2 == 0){
          flag = true;
        }
        result = flag;
      break;

      case 'odd':
        flag = false;
        if (value % 2 !== 0){
          flag = true;
        }
        result = flag;
      break;
    }


    return result;
  }

}
