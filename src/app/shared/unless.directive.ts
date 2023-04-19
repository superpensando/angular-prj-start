import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive( {
  selector: '[appUnLess]',
})

export class UnLessDirective  {
    @Input() set appUnLess(condition: boolean) {
    if(!condition){
      console.log(condition);
      this.vCRef.createEmbeddedView(this.templateRef);
    }else {
      this.vCRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vCRef: ViewContainerRef) {}

}
