import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import * as jsPDF from 'jspdf';
import { Guid } from '../../../classes/guid';
import { Page } from '../../../models/page';
import { ControlDirective } from './../../../directives/control-host.directive';
import { Control } from './../../../models/control';
import { ConfigPage } from './../../../models/page';
import { Report } from './../../../models/report';
import { ControlsService } from './../../../services/controls.service';

@Component({
  selector: 'app-report-template',
  templateUrl: './report-template.component.html',
  styleUrls: ['./report-template.component.css']
})
export class ReportTemplateComponent implements OnInit {
  screen = {
    width: null,
    height: null
  };
  page: Page;
  pdfSrc: string;
  components: ComponentRef<{}>[] = [];
  viewContainerRef: ViewContainerRef;
  @ViewChild(ControlDirective) controlHost: ControlDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private controlService: ControlsService) {

  }

  ngOnInit() {
  }


  renderPage(page: Page) {
    if (this.viewContainerRef) {
      this.viewContainerRef.clear();
    }
    this.components = [];
    this.page = page;
    this.createPdf();
    this.parseControl(this.page);
  }


  pageRendered(e: CustomEvent) {
    const el = document.getElementsByClassName('pdfViewer')[0];
    this.screen.width = el.clientWidth + 'px';
    this.screen.height = el.clientHeight + 'px';

  }

  parseControl(page: Page) {
    if (page.config.length > 0) {
      page.config.map(x => this.renderControl(x));
    }
  }


  createPdf() {
    const doc = new jsPDF('p', 'px', 'a4');
    const uri = doc.output('datauristring');
    this.pdfSrc = uri;
  }

  renderControl(config: ConfigPage) {
    const component = this.controlService.controls.find(x => x.title === config.componentName);
    if (component) {
      this.createComponent(component.component, config.posX, config.posY, config.value, config);
    }
  }

  changedPosition(pos) {
    console.log(pos);
  }

  createComponent(component: any, left: number, top: number, textContent?: string, config?: ConfigPage) {
    const componentFactoty = this.componentFactoryResolver.resolveComponentFactory(component);
    this.viewContainerRef = this.controlHost.viewContainerRef;
    const componentRef = this.viewContainerRef.createComponent(componentFactoty);


    componentRef.location.nativeElement.style.textContent = textContent;
    componentRef.location.nativeElement.style.left = left + 'px';
    componentRef.location.nativeElement.style.top = top + 'px';
    componentRef.location.nativeElement.style.fontSize = '16px';
    componentRef.location.nativeElement.style.position = 'absolute';
    this.components.push(componentRef);
  }

  generatePdf(report: Report) {
    const pdf = new jsPDF('p', 'px', 'a4');
    const ratio = 16 / 9;
    let countPage = 1;

    for (const page of report.pages) {
      for (const config of page.config) {
        const el = config.value;
        const left = config.posX;
        const top = config.posY;
        const text = config.value;
        pdf.setFontSize(18 / ratio);
        pdf.text(left / ratio, top / ratio, text);
      }
      if (countPage++ !== report.pages.length) {
        pdf.addPage();
      }
    }
    pdf.save('test.pdf');
  }

  randonPosition(maxNumber: number): number {
    return Math.floor(Math.random() * maxNumber) + 1;
  }


  addControl(control: Control) {
    console.log(control);
    const left = this.randonPosition(parseFloat(this.screen.width) - 150);
    const top = this.randonPosition(parseFloat(this.screen.height) - 150);
    this.createComponent(control.component, left, top);
    const textContent = this.components[this.components.length - 1].location.nativeElement.textContent;
    this.addConfigControl(left, top, textContent, control.title);
  }

  addConfigControl(posX: number, posY: number, value: any, title: string) {
    const name = Guid.newGuid();
    const config = new ConfigPage(name, posX, posY, title, value);
    this.page.config.push(config);
  }
}
