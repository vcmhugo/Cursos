import {addProduct,productos} from './products/product.service'


addProduct({
  id:12,
  title:'nocibytes',
  createDates:new Date(),
  updateDates:new Date(),
  stock:20,
  size:'XL',
  category:{
    id:23,
    name:'newObjeto',
    createDates:new Date(),
    updateDates:new Date()
  }
});


  console.log(productos);
