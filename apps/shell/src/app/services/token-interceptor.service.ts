import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class TokenInterceptor {
  /**
   * Creates an instance of TokenInterceptor.
   * @param {OidcSecurityService} auth
   * @memberof TokenInterceptor
   */
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  /**
   * Intercept all HTTP request to add JWT token to Headers
   * @param {HttpRequest<any>} request
   * @param {HttpHandler} next
   * @returns {Observable<HttpEvent<any>>}
   * @memberof TokenInterceptor
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // debugger;
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${sessionStorage
          .getItem('token')!
          .replace(/['"]+/g, '')}`,
      },
    });

    return next.handle(request).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            window.location.href = '/';
            //this.router.navigate([''], {relativeTo: });
          }
        }

        return new Observable<HttpEvent<any>>();
      })
    );
  }
}
