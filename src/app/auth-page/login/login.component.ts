import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as authActions from "../../states/auth/auth.actions";
import { passwordValidator } from '../utils/password.validator';
import { selectLoginFailure, selectUserDetails } from '../../states/auth/auth.selectors';
import { LoginFailure, UserDetails } from '../../interfaces/user.interface';
import { UserState } from '../../states/auth/auth.reducer';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, passwordValidator()]),
  });

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  registeringUser: any;
  loginFailure$: Observable<LoginFailure | null>;
  userDetails$: Observable<UserDetails | null>;
  constructor(private store: Store<{ userInfo: UserState }>, private toasterService: ToasterService) {
    this.loginFailure$ = this.store.select(selectLoginFailure);
    this.userDetails$ = this.store.select(selectUserDetails);
  }

  ngOnInit(): void {
    this.loginFailure$.subscribe(lf => {
      if (lf != null)
        this.toasterService.showCustomToastAndIcon("danger", lf?.loginFailedRes?.error?.errorMsg, lf?.msg, 'alert-triangle-outline');
    });
    this.userDetails$.subscribe(sm => {
      if (sm != null)
        this.toasterService.showCustomToastAndIcon("success", sm?.username, " Login is successfull",'');
    });
  }

  login(): void {
    this.registeringUser = this.loginForm.value;
    console.log(this.registeringUser)
    this.store.dispatch(authActions.login({ loginRequest: this.registeringUser }));
  }


}
