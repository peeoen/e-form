import { Injectable } from '@angular/core';
import { PageSize } from './../models/page';

@Injectable({
    providedIn: 'root'
})
export class PageService {

    pageSizes: PageSize[] = [];
    
    constructor() { 
        const prefix = ['a', 'b', 'c'];
        for (let p = 0; p < prefix.length; p++) {
            for (let r = 0; r <= 10; r++) {
                this.pageSizes.push({
                    name: prefix[p] + r,
                    value: prefix[p].toUpperCase() + r,
                });
            }
        }
        const anotherSize = ['dl', 'letter', 'government-letter', 'legal', 'junior-legal', 'ledger', 'tabloid', 'credit-card'];
        anotherSize.forEach(p => {
            this.pageSizes.push({
                name: p,
                value: p && p[0].toUpperCase() + p.slice(1),
            });
        });
    }
}
