import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogReportComponent } from './components/dialog-report/dialog-report.component';
import { ReportsComponent } from './components/reports/reports.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MaterialModule } from './modules/material.module';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ReportsComponent,
    DialogReportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  entryComponents: [
    DialogReportComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
