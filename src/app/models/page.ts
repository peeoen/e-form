export class Page {
    number: number;
    image?: string;
    config?: ConfigPage[];

    constructor(pageNum: number) {
        this.number = pageNum;
        this.image = 'assets/sample-forms/form1.png';
        this.config = [];
    }
}

export class ConfigPage {
    posX: number;
    posY: number;
    value?: any;
    name: string;
    style?: any;
    componentName?: string;

    constructor(name: string, posX: number, posY: number, componentName: string, value?: any) {
        this.name = name;
        this.posX = posX;
        this.posY = posY;
        this.componentName = componentName;
        this.value = value;
    }
}


export class PageSize {
    name: string;
    value: string;
}
