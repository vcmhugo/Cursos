export const createProduct = (
  id:number | string,
  isNew: boolean = true,
  stock: number = 10,
) =>{

  return {
    id,
    stock,
    isNew
  }

}


const rta = createProduct(12,true,23);
console.log(rta);
const rta2 = createProduct(12,true);
console.log(rta2);
const rta3 = createProduct(12,false,0);
console.log(rta3);
