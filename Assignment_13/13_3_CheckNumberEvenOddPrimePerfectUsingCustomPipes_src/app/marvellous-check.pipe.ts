import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousCheck'
})
export class MarvellousCheckPipe implements PipeTransform {

  transform(num: number, chkType: String): String{
    let strMessage;

    if (chkType == "Even"){
        if (num % 2 == 0){
            strMessage =  num + " is Even number";
        } else {
            strMessage =  num + " is not Even number";
        }
    } else if (chkType == "Odd") {
      if (num % 2 == 0){
        strMessage =  num + " is not Odd number";
    } else {
        strMessage =  num + " is Odd number";
    }
    }
     else if (chkType == "Prime"){

      let flagIsPrime = true;

      for (let i = 2; i <= num / 2; i++){
        if ( num % i == 0){
          flagIsPrime = false;
        }
      }
      if (flagIsPrime == true){
        strMessage =  num + " is Prime number";
      }else {
        strMessage =  num + " is not Prime number";
        
      }
    } else if (chkType == "Perfect") {

      let sum = 0;
      console.log(num);

      for (let i = 1; i <= num / 2; i++){

        if ( num % i == 0){
          sum  += i;
        }
      }

      if (sum == num){
        strMessage =  num + " is Perfect number";


      } else {
        strMessage =  num + " is not Perfect number";

        console.log(sum);
      }

    }



    return strMessage;

}

}
