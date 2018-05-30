import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Page } from './../../../models/page';

@Component({
  selector: 'app-report-pages',
  templateUrl: './report-pages.component.html',
  styleUrls: ['./report-pages.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ReportPagesComponent implements OnInit {

  @Input() pages: Page[];
  @Output() selected = new EventEmitter();
  @Input() pageActive: Page;
  
  constructor() { 

  }

  ngOnInit() {
  }

  selectedPage($event: Page) {
    this.selected.emit($event);
  }

}
