export class Page {
    number: number;
    image?: string;
    config?: any;

    constructor(pageNum: number) {
        this.number = pageNum;
    }
}


export class PageSize {
    name: string;
    value: string;
}
