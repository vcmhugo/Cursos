export function parseStr(texto:string):string[];
export function parseStr(texto:string[]):string;


/* export function parseStr(texto:string | string[]):string | string[]{

  if(Array.isArray(texto)){
      return texto.join();
  }else{
    return texto.split('');
  }

} */

///Refactory de la funcion anterior cambiando a typeof
export function parseStr(texto:unknown):unknown{
  if(Array.isArray(texto)){
      return texto.join();
  }else if(typeof texto==='string'){
    return texto.split('');
  }
}


const rtaO = parseStr('hugo');
console.log(rtaO);

const rtaO2 = parseStr(['s','u','s','s']);
console.log(rtaO2);
