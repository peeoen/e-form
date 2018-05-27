import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Control } from './../../../../models/control';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
})
export class ControlComponent implements OnInit {

  @Input() control: Control;
  @Output() selectedControl = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectControl() {
    this.selectedControl.emit(this.control);
  }

}
