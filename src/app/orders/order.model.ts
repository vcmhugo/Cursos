import {BaseModel} from '../base.model';
import {Product} from '../products/product.model';
import {User} from '../usuarios/user.model';

export interface Order extends BaseModel {

  id:number|string;
  products:Product[];
  user:User

}
