import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header-builder',
  templateUrl: './header-builder.component.html',
  styleUrls: ['./header-builder.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderBuilderComponent implements OnInit {

  @Input() reportName: string;
  constructor() { }

  ngOnInit() {
  }

}
