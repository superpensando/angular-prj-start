import { Directive, Renderer2, OnInit, ElementRef} from "@angular/core";

@Directive( {
  selector: '[appHighlight]',
})

export class HighlightDirective implements OnInit {

  constructor (private elRef: ElementRef, private renderer: Renderer2){}
  ngOnInit(): void {
     //Directive code by default
  }


}
