import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  standalone: false,
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() message: string = '';

  @Output() notifyParent = new EventEmitter<void>(); 

  constructor() { }

  ngOnInit() {

  }

  clickMe(){
    alert("child click me called.");
    this.notifyParent.emit();
  }

}
