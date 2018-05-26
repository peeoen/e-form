import { Injectable } from '@angular/core';
import { Control } from './../models/control';

@Injectable({
    providedIn: 'root'
})
export class ControlsService {

    controls: Control[] = [
        {
            title: 'Label',
            icon: 'label',
            component: null
          },
          {
            title: 'Text',
            icon: 'title',
            component: null
          },
          {
            title: 'Checkbox',
            icon: 'check_box',
            component: null
          },
          {
            title: 'Radio',
            icon: 'radio_button_checked',
            component: null
          },
          {
            title: 'Dropdown',
            icon: 'view_stream',
            component: null
          },
          {
            title: 'Image',
            icon: 'broken_image',
            component: null
          },
    ];

    constructor() { }
}
