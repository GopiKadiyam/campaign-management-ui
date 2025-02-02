import { Action, createReducer, on } from '@ngrx/store';
import { LOGIN_STATUSES } from '../../interfaces/common.interface';
import { LoginFailure, UserDetails } from '../../interfaces/user.interface';
import * as authActions from './auth.actions';


export interface UserState {
    userDetails: UserDetails;
    loginFailure: LoginFailure;

}

export const initialUserState: UserState = {
    userDetails: null,
    loginFailure: null
}

const auth = createReducer(
    initialUserState,
    on(authActions.loadUserFailedMsgOnLoginFailure, (state, payload) => ({ ...state, loginFailure: payload.loginFailure  })),
    on(authActions.loadUserDataOnLoginSuccess, (state, payload) => ({ ...state, userDetails: payload.loginSuccessRes })),
    // on(authActions.ResetUser, state => ({ ...state, userDetails: null, status: Statuses.UNINITIALIZED }))
)


export function authReducer(state: UserState | undefined, action: Action) {
    return auth(state, action);
}
