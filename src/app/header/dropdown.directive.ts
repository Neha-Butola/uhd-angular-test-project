import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private eleRef: ElementRef) {};
  @HostBinding('class.show')  isOpen = false
  @HostListener('document:click',['$event']) toggleOpen(event: Event) {
      this.isOpen = this.eleRef.nativeElement.contains(event.target)? !this.isOpen: false;
  }

}
