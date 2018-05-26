import { Page } from './../../../models/page';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report-pages',
  templateUrl: './report-pages.component.html',
  styleUrls: ['./report-pages.component.css']
})
export class ReportPagesComponent implements OnInit {

  @Input() pages: Page[];
  
  constructor() { }

  ngOnInit() {
  }

}
