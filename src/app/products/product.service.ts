import {Product} from './product.model';

export const productos:Product[] = [];

export const addProduct = (data:Product) =>{

 // data.id = ''

  productos.push(data);
}
