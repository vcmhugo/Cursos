

const prices:(number | string)[] = [1,2,3,4,5,6,7,8,9,10]

prices.push(1)
prices.push('slkh');

//duplas tipar y delimitgar cuantgos elementos tendras el arreglo y de que tipo
let user:[string, number];

user = ['nicobytes',12];

//use de destructuracion

const [users, age] = user;

console.log(`usuario: ${users} edad: ${age}`);

