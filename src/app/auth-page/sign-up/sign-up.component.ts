import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as authActions from "../../states/auth/auth.actions"
import { passwordValidator } from '../utils/password.validator';
import { AppState } from '../../states/app.state';
import { Store } from '@ngrx/store';
import { SignUp } from '../../interfaces/auth.interface';
import { SignUpFailure } from '../../interfaces/user.interface';
import { Observable } from 'rxjs';
import { UserState } from '../../states/auth/auth.reducer';
import { selectSignUpFailure } from '../../states/auth/auth.selectors';

@Component({
  selector: 'ngx-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  signUpForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, passwordValidator()]),
  });

  get username(){
    return this.signUpForm.get('username');
  }

  get email(){
    return this.signUpForm.get('email');
  }

  get password(){
    return this.signUpForm.get('password');
  }

  signUpJson: any;
  signUpFailure$: Observable<SignUpFailure | null> ;

  constructor(private store: Store<{ userInfo: UserState }>) {
    this.signUpFailure$ = this.store.select(selectSignUpFailure);
   }

  signUp(): void {
    this.signUpJson = this.signUpForm.value;
    this.store.dispatch(authActions.signUp({signUPReq: this.signUpJson}));
  }

}
