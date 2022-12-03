import {Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";

/**
 * This manipulates color and bg color of the view button
 * For eg : this directive can be referenced by name buttonColor as <p buttonColor> ... </p>
 */
@Directive({
  selector: '[buttonColor]'
})
export class ButtonColorDirective {
  @Input() backgroundColor: string = 'green';
  @Input() hoverBackgroundColor: string = '#125e12';
  @Input() buttonLetterColor: string = 'white';

  // Event listener on directive
  @HostListener('mouseenter') onMouseEnter(eventData: Event) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.hoverBackgroundColor);
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    this.el.nativeElement.style.backgroundColor = this.backgroundColor;
    this.el.nativeElement.style.color = this.buttonLetterColor;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    el.nativeElement.style.backgroundColor = this.backgroundColor;
    el.nativeElement.style.color = this.buttonLetterColor;
  }
}
