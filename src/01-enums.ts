export enum ROLES {

      ADMIN = 'admin',
      SELLER = 'seller',
      CUSTOMER = 'costumer'
}


export type User = {

    username:string;
    role:ROLES;
}


/* const nicoUser: User = {

  username:'nicobaty',
  role:ROLES.ADMIN

}
//console.log(nicoUser); */
