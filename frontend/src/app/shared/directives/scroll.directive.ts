import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective implements AfterViewInit {

  constructor(private elRef:ElementRef) {}

  ngAfterViewInit(){
    this.elRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: "start" });
  }

}
