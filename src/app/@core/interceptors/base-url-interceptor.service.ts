import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, BACKEND_HOST } from '../../app.constant';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlInterceptorService  implements HttpInterceptor{

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   const startTime = Date.now();
    const host = this.isUrlMatch(request.urlWithParams) ? BACKEND_HOST.campaignBEUrl:"";
    request = request.clone({url: `${host}${request.urlWithParams}`});
    return next.handle(request).pipe(
      tap( event => {
          if(event instanceof HttpResponse){
            const endTime = Date.now();
            const elapsedTime = endTime - startTime;

            console.log(`Request for ${request.url} took ${elapsedTime} milli seconds`)
          }
      })
    );
  }

  private isUrlMatch(urlParam: string){
    return [...Object.values(API_URL.authURLs),...Object.values(API_URL.featureURLs)].includes(urlParam);
  }

}
