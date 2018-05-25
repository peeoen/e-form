import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
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
    public dialog: MatDialog) { }

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
        console.log(report);
        report.image = 'assets/sample-forms/form1.png';
        this.reportService.addReport(report);
      }
    });
  }

  removeReport(report: Report) {
    if (confirm('Are you sure to delete this report?')) {
      this.reportService.removeReport(report);
    }
  }
}
