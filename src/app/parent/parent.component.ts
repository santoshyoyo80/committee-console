import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  standalone: false,
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor(private render2: Renderer2) { }

  ngOnInit() {
  }

  parentClick() {
    alert("parentn called.");
  }

}
