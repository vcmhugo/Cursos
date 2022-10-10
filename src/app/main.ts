import {faker} from '@faker-js/faker';

import {addProduct,productos,updateProducts,findProducts} from './products/product.service';


for(let i=0; i<=10; i++){

  addProduct({
    //id:faker.datatype.uuid(),
    description:faker.commerce.productDescription(),
    title:faker.commerce.productName(),
    size:faker.helpers.arrayElement(['S','M','L' ,'XL']),
    //createDates:faker.date.recent(),
    //updateDates:faker.date.recent(),
    image:faker.image.imageUrl(),
    color:'negro',
    price: parseInt(faker.commerce.price(),10),
    isNew:faker.datatype.boolean(),
    tags:faker.helpers.arrayElement(),
    stock:faker.datatype.number({min:1, max:10}),
    //category:{
      //id:faker.datatype.uuid(),
      //name:faker.commerce.department(),
      //createDates:faker.date.recent(),
      //updateDates:faker.date.recent()
    //}
    categoryID:faker.datatype.uuid()
  });

}


  //console.log(productos);

  const product = productos[0];
  //console.log(product);

  updateProducts(product.id,{

    title:'Esto es un update',
    color:'rosa',
    isNew:true

  });

  console.log(productos[0]);

  const rta = findProducts(product.id);
/*   let rta:Product[] = [];
  rta = findProducts({
    stock:10
  }); */


  console.log(rta);
