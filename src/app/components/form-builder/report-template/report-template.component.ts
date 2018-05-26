import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-report-template',
  templateUrl: './report-template.component.html',
  styleUrls: ['./report-template.component.css']
})
export class ReportTemplateComponent implements OnInit {

  pdfSrc: string;
  constructor() { 
    const doc = new jsPDF('p', 'px', 'a4');
    const uri = doc.output('datauristring');

    this.pdfSrc = uri;
  }

  ngOnInit() {
  }

}
