import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from './../../../../models/page';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReportPageComponent implements OnInit {

  @Input() page: Page;
  @Output() selected = new EventEmitter();
  @Input() active: boolean;
  constructor() { }

  ngOnInit() {
  }

  selectPage() {
    this.selected.emit(this.page);
  }

}
