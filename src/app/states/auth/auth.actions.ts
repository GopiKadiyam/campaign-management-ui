import { createAction, props } from "@ngrx/store";
import * as formInterfaces from "../../interfaces/auth.interface";
import { LoginFailure, SignUpFailure, UserDetails } from "../../interfaces/user.interface";

const AUTH_ACTIONS = '[Auth]';

export const login = createAction(`${AUTH_ACTIONS} Calling Login API For Token`, props<{ loginRequest: formInterfaces.Login }>());
export const loginSuccess = createAction(`${AUTH_ACTIONS} Login Success`, props<{ loginSuccessRes: UserDetails }>());
export const loginFailed = createAction(`${AUTH_ACTIONS} Login Failure`, props<{ loginRequest:formInterfaces.Login,loginFailedRes: any, msg: string }>());

export const signUp = createAction(`${AUTH_ACTIONS} Calling SIGN UP API`, props<{ signUPReq: formInterfaces.SignUp }>());
// export const signUp = createAction(`${AUTH_ACTIONS} Calling SIGN UP API`, props<{ params: formInterfaces.SignUp }>());
export const signUpSuccess = createAction(`${AUTH_ACTIONS} SIGN UP API Success `,props<{params: string}>());
export const signUpFailure = createAction(`${AUTH_ACTIONS} SIGN UP API FAILED`,props<{params: SignUpFailure}>())

export const loadUserDataOnLoginSuccess = createAction(`${AUTH_ACTIONS} Load User Data`, props<{ loginSuccessRes : UserDetails  }>());
export const loadUserFailedMsgOnLoginFailure = createAction(`${AUTH_ACTIONS} Load User Data`, props<{ loginFailure : LoginFailure  }>());
export const loadUserFailedMsgOnSignUpailure = createAction(`${AUTH_ACTIONS} Load User Data On Sign Up failue`, props<{ signUpFailure : SignUpFailure  }>());
