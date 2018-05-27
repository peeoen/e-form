import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ReportService } from '../../services/report.service';
import { Report } from './../../models/report';
import { DialogReportComponent } from './../dialog-report/dialog-report.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  reports$: Observable<Report[]>;

  constructor(private reportService: ReportService,
    public dialog: MatDialog,
  private router: Router) { }

  ngOnInit() {
    this.reports$ = this.reportService.getReports();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogReportComponent, {
      width: '350px',
      data: { report: null }
    });

    dialogRef.afterClosed().subscribe((report: Report) => {
      if (report) {
        const _newReport = new Report();
        _newReport.name = report.name;
        _newReport.description = report.description;
        _newReport.sizepage = report.sizepage;
        _newReport.image = 'assets/sample-forms/form1.png';
        this.reportService.addReport(_newReport);
      }
    });
  }

  removeReport(report: Report) {
    if (confirm('Are you sure to delete this report?')) {
      this.reportService.removeReport(report);
    }
  }

  editReport(report: Report) {
    this.reportService.reportActive = report;
    this.router.navigate(['forms-builder']);
  }
}
