import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthServices } from '../../services/auth.services';
import { isAuth } from '../functions/is-auth';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthClassGuard implements CanActivate {
  authService = inject(AuthServices);
  router = inject(Router)
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {

    return this.authService.isAuth$.pipe(
      map( isAuth => isAuth || this.router.createUrlTree(['/login']))
    );
  }
  
}
