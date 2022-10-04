function parseStr(texto:string | string[]):string | string[]{

  if(Array.isArray(texto)){
      return texto.join();
  }else{
    return texto.split('');
  }

}


const rta = parseStr('hugo');
console.log(rta);

const rta2 = parseStr(['s','u','s','s']);
console.log(rta2);
