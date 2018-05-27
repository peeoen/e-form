import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Control } from './../../../models/control';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlsComponent implements OnInit {

  @Input() controls: Control[];
  constructor() { }

  ngOnInit() {

  }


}
