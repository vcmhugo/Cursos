import {Product} from './product.model';

export interface createProductDTO extends
  Omit<Product,'id' | 'createDates' | 'updateDates' | 'category'>{

  categoryID:string;

}

export interface updateProductDTO extends
  Partial<Product>{
}

export interface findProductDTO extends
  Partial<Product>{
}
