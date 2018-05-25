import { Injectable } from '@angular/core';
import { Report } from './../models/report';

@Injectable({
    providedIn: 'root'
})
export class ReportService {

    mockPages: Report[] = [
        {
            name: 'report 1',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
            sizepage: 'a4',
            image: 'assets/sample-forms/form1.png'
        },
        {
            name: 'report 2',
            description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
            sizepage: 'a4',
            image: 'assets/sample-forms/form1.png'
        },
        {
            name: 'report 3',
            description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.`,
            sizepage: 'a4',
            image: 'assets/sample-forms/form1.png'
        },
        {
            name: 'report 4',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            sizepage: 'a4',
            image: 'assets/sample-forms/form1.png'
        }
    ];

    constructor() { }


}
