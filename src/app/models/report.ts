import { Page } from './page';

export interface Report {
    name: string;
    description: string;
    sizepage: string;
    image?: any;
    pages?: Page[];
}
