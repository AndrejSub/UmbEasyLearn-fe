import { HttpInterceptorFn } from '@angular/common/http';

export const customerInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${localStorage.getItem("loginToken")}`
    }
  });
  return next(authReq);
};
