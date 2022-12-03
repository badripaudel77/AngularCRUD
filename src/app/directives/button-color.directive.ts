import {Directive, ElementRef} from "@angular/core";

/**
 * This manipulates color and bg color of the view button
 * For eg : this directive can be referenced by name buttonColor as <p buttonColor> ... </p>
 */
@Directive({
  selector: '[buttonColor]'
})
export class ButtonColorDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'green';
    el.nativeElement.style.color = 'white';
  }
}
