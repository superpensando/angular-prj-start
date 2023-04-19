import { Directive, Renderer2, OnInit, ElementRef, HostListener } from "@angular/core";

@Directive( {
  selector: '[appHighlight]',
})

export class HighlightDirective implements OnInit {

  constructor (private elRef: ElementRef, private renderer: Renderer2){}
  ngOnInit(): void {

  }

  // HostListener (escucha eventos)

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','#E3C0E6');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');
  }

}
