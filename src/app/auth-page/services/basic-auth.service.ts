import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, SignUp } from '../../interfaces/auth.interface';
import { Observable, of } from 'rxjs';
import { UserDetails } from '../../interfaces/user.interface';
import { ApiService } from '../../@core/services/api.service';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from '../../app.constant';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private apiService: ApiService) { }

  login(loginParams: Login): Observable<UserDetails> {
    return this.apiService.doPost<UserDetails>(API_URL.authURLs.signIn, loginParams);
    // return of({
    //   "id": 11,
    //   "username": "admin@gmail.com",
    //   "email": "admin@gmail.com",
    //   "roles": [
    //     "ROLE_ADMIN"
    //   ],
    //   "accessToken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3Mzg0MjEyMDAsImV4cCI6MTczODUwNzYwMH0.zv1U0f9PgavIgQatoHAcConjWanb_sK3W3-iycoBZZ8",
    //   "tokenType": "Bearer"
    // });

  }

  isAuthenticated(): Observable<boolean> {
    return this.apiService.doGet<{ authenticated: boolean }>(API_URL.authURLs.checkAuth)
      .pipe(
        map(response => response?.authenticated),
        catchError(() => of(false)) // If error occurs, return false (unauthenticated)
      );
  }

  test(): Observable<any>{
    return this.apiService.doGet<any>(API_URL.authURLs.test);
  }

  signUp(signUpParams: SignUp): Observable<any> {
    return this.apiService.doPost<any>(API_URL.authURLs.signUp, signUpParams);

  }

  getProfile(): Observable<UserDetails> {
    //return this.http.get<User>('/profile');
    return of({
      "id": 11,
      "username": "admin@gmail.com",
      "email": "admin@gmail.com",
      "roles": [
        "ROLE_ADMIN"
      ],
      "accessToken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3Mzg0MjEyMDAsImV4cCI6MTczODUwNzYwMH0.zv1U0f9PgavIgQatoHAcConjWanb_sK3W3-iycoBZZ8",
      "tokenType": "Bearer"
    });
  }
}
