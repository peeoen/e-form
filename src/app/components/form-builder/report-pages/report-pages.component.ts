import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Page } from './../../../models/page';

@Component({
  selector: 'app-report-pages',
  templateUrl: './report-pages.component.html',
  styleUrls: ['./report-pages.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ReportPagesComponent implements OnInit {

  @Input() pages: Page[];
  
  constructor() { 

  }

  ngOnInit() {
    console.log(this.pages);
  }

}
