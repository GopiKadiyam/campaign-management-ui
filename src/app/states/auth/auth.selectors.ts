import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./auth.reducer";

// export const selectAuthState = (state: AppState) => state.userInfo;

// export const selectUserInfo = createSelector(selectAuthState, (state) => state.userDetails);

export const userState = createFeatureSelector<UserState>('userInfo');

export const selectUserDetails = createSelector(
  userState,
  (state: UserState) => state.userDetails
);

export const selectLoginFailure = createSelector(
  userState,
  (state: UserState) => state.loginFailure
);