//literal types
type sizes = 'S' | 'M' | 'L' | 'XL';


interface Product {

    id: string | number;
    title:string;
    createPro:Date;
    stock:number;
    size:sizes;

}


const productos:Product[] = [];


productos.push({
  id:12,
  title:'nocibytes',
  createPro:new Date(),
  stock:20,
  size:'XL'
});


  console.log(productos);
