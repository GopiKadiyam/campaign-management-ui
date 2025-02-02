import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BasicAuthService } from '../services/basic-auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NbAuthSocialLink } from '@nebular/auth';
import { AppState } from '../../states/app.state';
import { Store } from '@ngrx/store';
import { login } from '../../states/auth/auth.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as authActions from "../../states/auth/auth.actions"
import { Login } from '../../interfaces/auth.interface';
import { passwordValidator } from '../utils/password.validator';
import { selectLoginFailure, selectUserDetails } from '../../states/auth/auth.selectors';
import { LoginFailure, UserDetails } from '../../interfaces/user.interface';
import { UserData } from '../../@core/data/users';
import { UserState } from '../../states/auth/auth.reducer';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs-compat/operator/shareReplay';
@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,passwordValidator()]),
  });

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }
  registeringUser: any;
  loginFailure$: Observable<LoginFailure | null> ;
  userDetails$: Observable<UserDetails | null>;
  constructor(private store: Store<{ userInfo: UserState }>,private router:Router) {
    this.loginFailure$ = this.store.select(selectLoginFailure);
    this.userDetails$=this.store.select(selectUserDetails);
   }

  ngOnInit(): void {
    
  }  

  login(): void {
    this.registeringUser=this.loginForm.value;
    console.log(this.registeringUser)
    this.store.dispatch(authActions.login({loginRequest: this.registeringUser}));
  }



  // isRightPanelActive = false;

  // constructor(
  //   private _router: Router
  // ) { }

  // togglePanel(isSignUp: boolean): void {
  //   this.isRightPanelActive = isSignUp;
  // }

  // loginWithOTP(event: Event): void {
  //   event.preventDefault();
  //   // Add sign-up logic here
  //   console.log('with otp');
  //   this._router.navigate(['/pages']);
  // }

  // loginWithGmail(event: Event): void {
  //   event.preventDefault();
  //   // Add sign-in logic here
  //   this._router.navigate(['/pages']);
  //   console.log('with gmail');
  // }
}
