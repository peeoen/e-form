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
  pageActive: Page;
  @ViewChild('reportTemplate')
  reportTemplate: ReportTemplateComponent;

  constructor(private reportService: ReportService,
  private pageService: PageService,
  private controlsService: ControlsService) {

  }

  ngOnInit() {
    
    if (this.reportService.reportActive) {
      this.report = this.reportService.reportActive;
      this.pages = this.report.pages;
      this.controls = this.controlsService.controls;
      this.renderPage(this.pages[0]);
    }
  }

  selectedControl(event) {
    this.reportTemplate.addControl(event);
  }

  generatePdf() {
    this.reportTemplate.generatePdf(this.report);
  }

  newPage() {
    let currPage = Math.max(...this.pages.map(x => x.number));
    const page = new Page(++currPage);
    this.report.pages.push(page);
  }

  renderPage(page: Page) {
    this.pageActive = page;
    this.reportTemplate.renderPage(page);
  }


  selectedPage(page: Page) {
    this.renderPage(page);
  }
}
