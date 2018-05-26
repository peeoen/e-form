import { Component, Input, OnInit } from '@angular/core';
import { Control } from './../../../models/control';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {

  @Input() controls: Control[];
  constructor() { }

  ngOnInit() {

  }


}
