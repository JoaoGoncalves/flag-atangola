import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthServices } from '../../services/auth.services';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthServices);
  const token = authService.getToken();

  const newReq = req.clone({setHeaders: {
     'Authorization': `Bearer ${token}`
  }})

  return next(newReq);
};
