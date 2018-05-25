import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PageSize } from '../../models/page';
import { Report } from '../../models/report';
import { PageService } from './../../services/pages.service';

@Component({
  selector: 'app-dialog-report',
  templateUrl: './dialog-report.component.html',
  styleUrls: ['./dialog-report.component.css']
})
export class DialogReportComponent  {

  pageSizes: PageSize[] = [];


  reportData: Report = {
    description: null,
    name: null,
    sizepage: 'a4'
  };


  constructor(
    public dialogRef: MatDialogRef<DialogReportComponent>,
    private pageService: PageService,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.pageSizes = this.pageService.pageSizes;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  
}
