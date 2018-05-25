import { Component, OnInit } from '@angular/core';
import { Report } from '../../models/report';
import { ReportService } from './../../services/report.service';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  report: Report;

  constructor(private reportService: ReportService) {
    if (this.reportService.reportActive) {
      this.report = this.reportService.reportActive;
    }
  }

  ngOnInit() {
  }

}
