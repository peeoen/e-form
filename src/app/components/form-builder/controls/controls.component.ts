import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Control } from './../../../models/control';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent implements OnInit {

  @Input() controls: Control[];
  @Output() selected = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  selectedControl(control: Control) {
    this.selected.emit(control);
  }


}
