import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Report } from './../models/report';

@Injectable({
    providedIn: 'root'
})
export class ReportService {

    reportActive: Report;
    
    private mockReports: Report[] = [];

    reports$: BehaviorSubject<Report[]>;

    constructor() {
        this.createReports();
        this.reports$ = new BehaviorSubject<Report[]>(this.mockReports);
        this.reports$.next(this.mockReports);
     }

     createReports() {
        const _newReport = new Report();
        _newReport.name = 'Report 1';
        _newReport.description = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;
        _newReport.sizepage = 'a4';
        _newReport.image = 'assets/sample-forms/form1.png';
        _newReport.pages[0].image = 'assets/sample-forms/form1.png';
        this.mockReports.push(_newReport);
        this.reportActive = _newReport;
     }

     addReport(report: Report) {
         this.mockReports.push(report);
         this.reports$.next(this.mockReports);
     }


     getReports(): Observable<Report[]> {
         return this.reports$.asObservable();
     }

     removeReport(report: Report) {
         this.mockReports = this.mockReports.filter(r => r !== report);
         this.reports$.next(this.mockReports);
     }

}
