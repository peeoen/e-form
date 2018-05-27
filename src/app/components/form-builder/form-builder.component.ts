import { Component, OnInit, ViewChild } from '@angular/core';
import { Report } from '../../models/report';
import { Control } from './../../models/control';
import { Page } from './../../models/page';
import { ControlsService } from './../../services/controls.service';
import { PageService } from './../../services/pages.service';
import { ReportService } from './../../services/report.service';
import { ReportTemplateComponent } from './report-template/report-template.component';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  report: Report;
  pages: Page[];
  controls: Control[];

  @ViewChild('reportTemplate')
  reportTemplate: ReportTemplateComponent;

  constructor(private reportService: ReportService,
  private pageService: PageService,
  private controlsService: ControlsService) {

    if (this.reportService.reportActive) {
      this.report = this.reportService.reportActive;
      this.pages = this.report.pages;
      this.controls = this.controlsService.controls;
    }

    // this.report = this.reportService.reportActive;
    // this.pages = this.pageService.pages;
    // this.controls = this.controlsService.controls;
  }

  ngOnInit() {
  }

  selectedControl(event) {
    this.reportTemplate.addControl(event);
  }

  generatePdf() {
    this.reportTemplate.generatePdf();
  }

}
