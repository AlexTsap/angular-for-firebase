import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  @Input() message;
  @Output() update = new EventEmitter();
  isMouseDown;

  constructor() {
  }

  ngOnInit() {
  }

}
