import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BasicAuthService } from '../../services/basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanLoad {
  constructor(private router: Router,private cookieService: CookieService,private authService:BasicAuthService) {
  }
 
  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
  //   if (true) {
  //     console.log("true retur")
  //     return true;  // Proceed with loading the route
  //   } else {
  //     console.log("login route")
  //     return this.router.createUrlTree(['/auth']);  // Redirect to login if no token
  //   }
  // }
  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      map((authenticated: boolean) => {
        if (authenticated) {
          return true; // Allow route loading
        } else {
          this.router.navigateByUrl('/auth'); // Redirect to login if not authenticated
          return false;
        }
      }),
      catchError(() => {
        this.router.navigateByUrl('/auth'); // Redirect on error
        return of(false);
      })
    );
  }
  
} 