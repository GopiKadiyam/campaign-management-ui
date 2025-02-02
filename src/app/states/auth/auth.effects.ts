import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BasicAuthService } from "../../auth-page/services/basic-auth.service";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import * as authActions from "./auth.actions";
import { catchError, map, mergeMap, switchMap, tap } from "rxjs/operators";
import { AppState } from "../app.state";
import { of, throwError } from "rxjs";
import { hideLoader, showLoader } from "../loaders/loader.actions";
import { LoginFailure } from "../../interfaces/user.interface";

@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions, private authService: BasicAuthService,
        private router: Router, private store$: Store<AppState>) { }

    // Dispatch loader actions
    loader$ = createEffect(() =>
        this.actions$.pipe(
            ofType(authActions.login),
            map(() => showLoader())
        )
    );

    hideLoader$ = createEffect(() =>
        this.actions$.pipe(
            ofType(authActions.loginSuccess, authActions.loginFailed),
            map(() => hideLoader())
        )
    );


    login$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.login),
        switchMap(action => {
            return this.authService.login(action.loginRequest).pipe(
                map((response) => authActions.loginSuccess({ loginSuccessRes: response })),
                catchError(error => of(authActions.loginFailed({ loginRequest: action.loginRequest, loginFailedRes: error, msg: "Login Failed. Please check and re login once again" })))
            )
        })
    ));
  
    loginSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(authActions.loginSuccess),
            tap(({ loginSuccessRes }) => {
                console.info(`Login success for ${loginSuccessRes?.username}: ${loginSuccessRes}`);
                // localStorage.setItem("access_token",loginSuccessRes.accessToken);
                this.router.navigateByUrl("/pages/dashboard");
            }),
            map(({ loginSuccessRes }) => {
                return authActions.loadUserDataOnLoginSuccess({ loginSuccessRes })
            })
        ),
    );

    loginFailure$ = createEffect(() =>
        this.actions$.pipe(
            ofType(authActions.loginFailed),
            tap(({ loginRequest, loginFailedRes, msg }) => {
                console.error(`Login failed for ${loginRequest?.emailOrPhone}: ${loginFailedRes}`);
                this.router.navigateByUrl("/auth", { state: { loginRequest, loginFailedRes, msg } })
            }),
            map(({ loginRequest, loginFailedRes, msg }) => {
                const loginFailure: LoginFailure = {
                    loginRequest: loginRequest,
                    loginFailedRes: loginFailedRes,
                    msg: msg
                }
                return authActions.loadUserFailedMsgOnLoginFailure({ loginFailure: loginFailure })
            })
        ),
    );



    signUp$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.signUp),
        mergeMap(action => this.authService.signUp(action.params).pipe(
            tap(res => (!!res.email && this.router.navigateByUrl('/auth/login'))),
            catchError(error => throwError(error))
        ))),
        { dispatch: false });

    // getProfile$ = createEffect(() => this.actions$.pipe(
    //     ofType(authActions.GetProfile),
    //     mergeMap(() => this.authService.getProfile().pipe(
    //         map(user => authActions.SetUser({ user })),
    //         catchError(error => throwError(error))
    //     ))
    // ));
}