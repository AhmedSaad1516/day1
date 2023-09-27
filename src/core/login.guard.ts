import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {


  if('token' in localStorage){  
    return false;
  }else{
    return true;
  }
};
      