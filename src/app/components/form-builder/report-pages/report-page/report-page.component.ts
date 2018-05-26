import { Page } from './../../../../models/page';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css']
})
export class ReportPageComponent implements OnInit {

  @Input() page: Page;
  constructor() { }

  ngOnInit() {
  }

}
