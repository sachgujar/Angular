import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addMul'
})
export class AddMulPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value + args[0];
  }

}
