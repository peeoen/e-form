import { Injectable } from '@angular/core';
import { ControlTextComponent } from '../components/form-builder/controls/control-text/control-text.component';
import { ControlCheckboxComponent } from './../components/form-builder/controls/control-checkbox/control-checkbox.component';
import { ControlDropdownComponent } from './../components/form-builder/controls/control-dropdown/control-dropdown.component';
import { ControlImageComponent } from './../components/form-builder/controls/control-image/control-image.component';
import { ControlRadioComponent } from './../components/form-builder/controls/control-radio/control-radio.component';
import { LabelComponent } from './../components/form-builder/controls/label/label.component';
import { Control } from './../models/control';

@Injectable({
    providedIn: 'root'
})
export class ControlsService {

    controls: Control[] = [
        {
            title: 'Label',
            icon: 'label',
            component: LabelComponent
          },
          {
            title: 'Text',
            icon: 'title',
            component: ControlTextComponent
          },
          {
            title: 'Checkbox',
            icon: 'check_box',
            component: ControlCheckboxComponent
          },
          {
            title: 'Radio',
            icon: 'radio_button_checked',
            component: ControlRadioComponent
          },
          {
            title: 'Dropdown',
            icon: 'view_stream',
            component: ControlDropdownComponent
          },
          {
            title: 'Image',
            icon: 'broken_image',
            component: ControlImageComponent
          },
    ];

    constructor() { }
}
