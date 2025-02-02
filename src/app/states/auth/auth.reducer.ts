import { Action, createReducer, on } from '@ngrx/store';
import { LOGIN_STATUSES } from '../../interfaces/common.interface';
import { LoginFailure, SignUpFailure, UserDetails } from '../../interfaces/user.interface';
import * as authActions from './auth.actions';


export interface UserState {
    userDetails: UserDetails;
    loginFailure: LoginFailure;
    signUpFailure: SignUpFailure

}

export const initialUserState: UserState = {
    userDetails: null,
    loginFailure: null,
    signUpFailure: null
}

const auth = createReducer(
    initialUserState,
    on(authActions.loadUserFailedMsgOnLoginFailure, (state, payload) => ({ ...state, loginFailure: payload.loginFailure  })),
    on(authActions.loadUserDataOnLoginSuccess, (state, payload) => ({ ...state, userDetails: payload.loginSuccessRes })),
    on(authActions.loadUserFailedMsgOnSignUpailure,(state, payload)=>({...state,signUpFailure:payload.signUpFailure})),
    // on(authActions.ResetUser, state => ({ ...state, userDetails: null, status: Statuses.UNINITIALIZED }))
)


export function authReducer(state: UserState | undefined, action: Action) {
    return auth(state, action);
}
