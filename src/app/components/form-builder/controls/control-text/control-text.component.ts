import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-control-text',
  templateUrl: './control-text.component.html',
  styleUrls: ['./control-text.component.css']
})
export class ControlTextComponent implements OnInit {

  @Output() changed = new EventEmitter();
  
  constructor(private elRef: ElementRef) { }

  ngOnInit() {
  }

  dragEnd(event) {
    this.elRef.nativeElement.style.left =  (event.x + parseFloat(this.elRef.nativeElement.style.left)) + 'px';
    this.elRef.nativeElement.style.top =  (event.y + parseFloat(this.elRef.nativeElement.style.top)) + 'px';
  }

}
