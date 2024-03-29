import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed = true;

  @Output() sectionSelected = new EventEmitter<string>();

  onSelect(section:string) {
      this.sectionSelected.emit(section);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
