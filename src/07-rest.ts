import {ROLES,User} from './01-enums';

const currentUser:User = {

  username:'nicobytes',
  role:ROLES.ADMIN

}


export const checkRol = () =>{

  if(currentUser.role ===ROLES.ADMIN){
    return true;
  }
  return false;

}


export const checkRoles = (role1:string, role2:string) =>{

  if(currentUser.role === role1){
    return true;
  }
  if(currentUser.role === role2){
    return true;
  }
  return false;

}


const rta = checkRol();
console.log(`check: ${rta}`);

const rta2 = checkRoles(ROLES.ADMIN,ROLES.SELLER);
console.log(`checkv2: ${rta2}`);


export const checkRolesV2 = (roles:string[]) =>{

  if(roles.includes(currentUser.role)){
    return true;
  }
  return false;

}

const rta3 = checkRolesV2([ROLES.ADMIN,ROLES.SELLER]);
console.log(`checkv3: ${rta3}`);

//de la forma de rest en typescript
export const checkRolesV3 = (...roles:string[]) =>{

  if(roles.includes(currentUser.role)){
    return true;
  }
  return false;

}

const rta4 = checkRolesV3(ROLES.ADMIN,ROLES.SELLER);
console.log(`checkv4: ${rta4}`);
