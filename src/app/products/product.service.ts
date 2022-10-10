import {Product} from './product.model';
import { createProductDTO,updateProductDTO,findProductDTO } from './product.dto';
import { faker } from '@faker-js/faker';

export const productos:Product[] = [];

export const addProduct = (data:createProductDTO) =>{

 // data.id = ''
  const newProduct = {
    ...data,
    id:faker.datatype.uuid(),
    createDates:faker.date.recent(),
    updateDates:faker.date.recent(),
    category:{
      id:faker.datatype.uuid(),
      name:faker.commerce.department(),
      createDates:faker.date.recent(),
      updateDates:faker.date.recent()
    }
  }
  productos.push(newProduct);

}

export const updateProducts = (id:string | number, changes:updateProductDTO)=>{

  ///actualizar datos en un json arrays
  const index = productos.findIndex(item=> item.id===id);
  const dataPrev = productos[index];

  productos[index]={

      ...dataPrev,
      ...changes
  }

}



//export const findProducts = (data:findProductDTO)=>{
  export const findProducts = (id:string | number)=>{

  const findProduct = productos.find(item=>item.id===id);

  return findProduct;

}
