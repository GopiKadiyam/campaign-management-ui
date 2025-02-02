import { createAction, props } from "@ngrx/store";
import * as formInterfaces from "../../interfaces/auth.interface";
import { LoginFailure, UserDetails } from "../../interfaces/user.interface";

const AUTH_ACTIONS = '[Auth]';

export const login = createAction(`${AUTH_ACTIONS} Calling Login API for token`, props<{ loginRequest: formInterfaces.Login }>());
export const loginSuccess = createAction(`${AUTH_ACTIONS} Login Success`, props<{ loginSuccessRes: UserDetails }>());
export const loginFailed = createAction(`${AUTH_ACTIONS} Login Failure`, props<{ loginRequest:formInterfaces.Login,loginFailedRes: any, msg: string }>());
export const signUp = createAction(`${AUTH_ACTIONS} sign up`, props<{ params: formInterfaces.SignUp }>());

export const loadUserDataOnLoginSuccess = createAction(`${AUTH_ACTIONS} Load User Data`, props<{ loginSuccessRes : UserDetails  }>());
export const loadUserFailedMsgOnLoginFailure = createAction(`${AUTH_ACTIONS} Load User Data`, props<{ loginFailure : LoginFailure  }>());

// const USER_ACTIONS = '[User]';
// export const GetProfile = createAction(`${USER_ACTIONS} Get Profile`);
// export const SetUser = createAction(`${USER_ACTIONS} Set User`, props<{ user: User }>());
// export const LoadingUser = createAction(`${USER_ACTIONS} Loading User`);
// export const ResetUser = createAction(`${USER_ACTIONS} Reset User`);