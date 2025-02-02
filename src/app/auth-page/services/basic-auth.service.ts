import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, SignUp } from '../../interfaces/auth.interface';
import { Observable, of } from 'rxjs';
import { UserDetails } from '../../interfaces/user.interface';
import { ApiService } from '../../@core/services/api.service';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  constructor(private apiService: ApiService) { }

  login(loginParams: Login): Observable<UserDetails> {
    return this.apiService.post(`${environment.backendUrl}/api/auth/sign-in`,loginParams,{ withCredentials: true });
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
    return this.apiService.get('http://localhost:8080/api/auth/check-auth')
    .pipe(
      map(response => response?.authenticated),
      catchError(() => of(false)) // If error occurs, return false (unauthenticated)
    );
  }

  signUp(signUpParams: SignUp): Observable<SignUp> {
    ///return this.http.post<SignUp>('/auth/sign-up', signUpParams);
    return of({
      firstName: "gopi ",
      middleName: "krishna ",
      lastName: "kadiyam",
      email: "learnergopikrishna@gmail.com",
      phone: "9182353051",
      password: "281314",
      confirmPassword: "281314"
    })
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
