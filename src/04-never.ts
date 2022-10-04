
/*
const withEnd = () =>{

  while(true){
    console.log('never');
  }

} */

const fail = (message:string) =>{
  throw new Error(message);
}


const ejemplo = (input:unknown) =>{

  if(typeof input === 'string'){
    return 'es un string';
  }else if(Array.isArray(input)){
    return 'es una array';
  }else{
    return fail('no match');
  }

}


console.log(ejemplo('hola'));
console.log(ejemplo([1,2,3,4]));
console.log(ejemplo(123));

