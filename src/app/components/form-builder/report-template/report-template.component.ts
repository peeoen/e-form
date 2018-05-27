import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild } from '@angular/core';
import * as jsPDF from 'jspdf';
import { ControlDirective } from './../../../directives/control-host.directive';
import { Control } from './../../../models/control';

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
  pdfSrc: string;
  components: ComponentRef<{}>[] = [];

  @ViewChild(ControlDirective) controlHost: ControlDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    const doc = new jsPDF('p', 'px', 'a4');
    const uri = doc.output('datauristring');

    this.pdfSrc = uri;
  }

  ngOnInit() {
  }

  pageRendered(e: CustomEvent) {
    const el = document.getElementsByClassName('pdfViewer')[0];
    this.screen.width = el.clientWidth + 'px';
    this.screen.height = el.clientHeight + 'px';
  
  }

  addControl(control: Control) {
    const componentFactoty = this.componentFactoryResolver.resolveComponentFactory(control.component);
    const viewContainerRef = this.controlHost.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(componentFactoty);
    console.log(componentRef);
    componentRef.location.nativeElement.style.position = 'absolute';
    componentRef.location.nativeElement.style.left = this.randonPosition(parseFloat(this.screen.width) - 100) + 'px';
    componentRef.location.nativeElement.style.top = this.randonPosition(parseFloat(this.screen.height) - 100) + 'px';
    this.components.push(componentRef);
  }


  generatePdf() {
    console.log(this.components);

    // const values = this.components.map(x => {
    //   return x.location.nativeElement.textContent;
    // });

    const pdf = new jsPDF('p', 'px', 'a4');
    const ratio = 16 / 9;
    for (const c of this.components) {
      const el = c.location.nativeElement;
      const left = parseFloat(el.style.left);
      const top = parseFloat(el.style.top);
      const text = el.textContent;
      console.log(left);
      console.log(top);
      console.log(text);
      pdf.text(left / ratio, top / ratio, text);
    }

    pdf.save('test.pdf');
  }

  randonPosition(maxNumber: number): number {
    return Math.floor(Math.random() * maxNumber) + 1; 
  }
}
