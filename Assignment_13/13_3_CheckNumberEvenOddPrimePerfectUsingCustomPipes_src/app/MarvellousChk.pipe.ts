import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: "marvellousChk"
})

export class MarvellousChk implements PipeTransform{

    transform(num: number, chkType: String): String{
        let strMessage;

        if (chkType == "Even"){
            if (num % 2 == 0){
                strMessage =  num + " is Even number";
            } else {
                strMessage =  num + " is not Even number";
            }
        }



        return strMessage;

    }

}