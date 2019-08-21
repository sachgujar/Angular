import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private ele: ElementRef) {
    this.ele.nativeElement.style.color = 'green';
    this.ele.nativeElement.style.background = 'yellow';
    this.ele.nativeElement.classList.add('font-bold');
   }

}
