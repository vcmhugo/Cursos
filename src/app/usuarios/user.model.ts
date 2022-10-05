import { BaseModel } from "../base.model";
export enum ROLES {

  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'costumer'

}


export interface User extends BaseModel {

      id:string|number;
      username:string;
      role:ROLES;
}
