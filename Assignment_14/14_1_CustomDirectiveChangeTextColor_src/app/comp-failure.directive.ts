import { Directive, ElementRef, HostListener } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private ele: ElementRef) { }

  @HostListener('mouseenter') onmouseenter(){
    this.ele.nativeElement.style.color = "red";
  }
  @HostListener('mouseleave') onmouseleave(){
    this.ele.nativeElement.style.color = "black";
  }

}
