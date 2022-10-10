//literal types
import {BaseModel} from '../base.model';
import {Category} from '../categorys/category.model';
export type sizes = 'S' | 'M' | 'L' | 'XL';


export interface Product extends BaseModel {

    readonly id: string | number;
    readonly title:string;
    readonly image:string;
    readonly description:string;
    readonly stock:number;
    readonly size?:sizes;
    readonly color:string;
    readonly price:number;
    readonly category:Category;
    readonly isNew:boolean;
    readonly tags: string[];

}





