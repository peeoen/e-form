import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-builder',
  templateUrl: './header-builder.component.html',
  styleUrls: ['./header-builder.component.css']
})
export class HeaderBuilderComponent implements OnInit {

  @Input() reportName: string;
  constructor() { }

  ngOnInit() {
  }

}
