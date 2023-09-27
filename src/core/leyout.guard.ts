import { CanActivateChildFn,  } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
export const leyoutGuard: CanActivateChildFn = (childRoute, state) => {

  if('token' in localStorage){
    return true;
  }else{
  
    return false;

  }
  
};
