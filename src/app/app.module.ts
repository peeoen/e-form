import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogReportComponent } from './components/dialog-report/dialog-report.component';
import { ControlCheckboxComponent } from './components/form-builder/controls/control-checkbox/control-checkbox.component';
import { ControlDropdownComponent } from './components/form-builder/controls/control-dropdown/control-dropdown.component';
import { ControlImageComponent } from './components/form-builder/controls/control-image/control-image.component';
import { ControlRadioComponent } from './components/form-builder/controls/control-radio/control-radio.component';
import { ControlTextComponent } from './components/form-builder/controls/control-text/control-text.component';
import { ControlComponent } from './components/form-builder/controls/control/control.component';
import { ControlsComponent } from './components/form-builder/controls/controls.component';
import { LabelComponent } from './components/form-builder/controls/label/label.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { HeaderBuilderComponent } from './components/form-builder/header-builder/header-builder.component';
import { ReportPageComponent } from './components/form-builder/report-pages/report-page/report-page.component';
import { ReportPagesComponent } from './components/form-builder/report-pages/report-pages.component';
import { ReportTemplateComponent } from './components/form-builder/report-template/report-template.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ControlDirective } from './directives/control-host.directive';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MaterialModule } from './modules/material.module';


const componentsEntry = [
  LabelComponent,
  ControlTextComponent,
  ControlCheckboxComponent,
  ControlRadioComponent,
  ControlDropdownComponent,
  ControlImageComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ReportsComponent,
    DialogReportComponent,
    FormBuilderComponent,
    HeaderBuilderComponent,
    ControlsComponent,
    ReportTemplateComponent,
    ReportPagesComponent,
    ControlComponent,
    ReportPageComponent,
    ...componentsEntry,
    ControlDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    PdfViewerModule,
    DragAndDropModule.forRoot(),
    AppRoutingModule
  ],
  entryComponents: [
    DialogReportComponent,
    ...componentsEntry,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
