import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mul'
})
export class MulPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value * args[0];
  }

  transformssss(value: any, ...args: any[]): any {
    return value * args[0];
  }

}
