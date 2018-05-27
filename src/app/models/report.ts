import { Page } from './page';

export class Report {
    public name: string;
    public description: string;
    public sizepage: string;
    public image?: any;
    public pages?: Page[] = [];

    constructor() {
        // this.pages = [];
        const page = new Page(1);
        this.pages.push(page);
    }

    // private addPage() {
    //     const currPage = Math.max(...this.pages.map(x => x.number));
    //     console.log(currPage);
    // }
}
