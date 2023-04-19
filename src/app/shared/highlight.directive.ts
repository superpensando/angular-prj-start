import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from "@angular/core";

@Directive( {
  selector: '[appHighlight]',
})

export class HighlightDirective implements OnInit {

  // HostBinding to bind Host Properties or css clases (access the DOM)

  @HostBinding('style.backgroundColor') backgroundColor: string = "transparent";

  constructor (private elRef: ElementRef, private renderer: Renderer2){}
  ngOnInit(): void {

  }

  // HostListener to Listen host Events

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','#E3C0E6');
    this.backgroundColor = '#E3C0E6';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');
    this.backgroundColor = 'transparent';
  }

}
