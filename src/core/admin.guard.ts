import { ActivatedRouteSnapshot, CanActivateChildFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export const adminGuard: CanActivateChildFn = (childRoute, state) => {

 return true

};



