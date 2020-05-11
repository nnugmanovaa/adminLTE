import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(err => {
      const error = err.error.message || err.statusText;
      if (err.status === 401) {
        this.router.navigate(['/auth/login']);
      }
      if (err.status >= 500) {
        this.router.navigate(['/error/500']);
      }
      if (err.status === 404) {
        this.router.navigate(['/error/404']);
      }
      if (err.status === 400) {
        if (err.error.errorCode === 'ENTITY_NOT_FOUND') {
          this.router.navigate(['/error/404']);
        }
        if (err.error) {
          console.log(err.error.message);
        }
      }
      return throwError(error);
    }));
  }
}
