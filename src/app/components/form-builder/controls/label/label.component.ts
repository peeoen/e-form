import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
