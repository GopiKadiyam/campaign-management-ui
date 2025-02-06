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
import { Login } from "../../interfaces/auth.interface";

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

    // signUp$ = createEffect(() => this.actions$.pipe(
    //     ofType(authActions.signUp),
    //     switchMap(action => this.authService.signUp(action.params).pipe(
    //                 map((response) => authActions.signUpSuccess({ params: response })),
    //                 catchError((error) => {
    //                     console.error(error)
    //                     return of(authActions.signUpFailure({ params: { signUpRequest: action.params, signUpError: error, msg: "Sign Up failed gopi" } }))
    //                 })
    //                 )
    //             )
    // ));


    loginSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(authActions.loginSuccess),
            tap(({ loginSuccessRes }) => {
                console.info(`Login success for ${loginSuccessRes?.username}: ${loginSuccessRes}`);
                // localStorage.setItem("access_token",loginSuccessRes.accessToken);
                this.router.navigate(["../app/dashboard"]);
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
                console.error(`Login failed for ${loginRequest?.username}: ${loginFailedRes}`);
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

    // signUp$ = createEffect(() => this.actions$.pipe(
    //     ofType(authActions.signUp),
    //     switchMap(action => {
    //         const login: Login = {
    //             "username": "superadmin",
    //             "password": "Fuckoff@20q2"
    //         }
    //         return this.authService.signUp(action?.signUPReq).pipe(
    //             tap(res => {
    //                 console.log("signUp$")
    //                 console.log(res)
    //                 this.router.navigateByUrl('/auth')
    //             }),
    //             catchError(error => throwError(error))
    //         )

    //     })),
    //     { dispatch: false });

    signUp$ = createEffect(() =>
        this.actions$.pipe(
            ofType(authActions.signUp), // Trigger on login action
            switchMap(action =>
                this.authService.signUp(action?.signUPReq).pipe(
                    map(response => {
                        console.log("signup success gopi")
                        console.log(response)
                        return authActions.signUpSuccess({ params: response });
                    }),
                    catchError((errorResponse) => {
                        const signUpFailureJson = { signUpRequest: action?.signUPReq, signUpError: errorResponse.error, msg: "creating account failed due to technical issues" }
                        return of(authActions.signUpFailure({ params: signUpFailureJson }))
                    })
                )
            )
        )
    );

    signUpSuccess$ = createEffect(() => this.actions$.pipe(
        ofType(authActions.signUpSuccess),
        tap(action => {
            this.router.navigateByUrl('/auth');
        })),
        { dispatch: false });

    signUpFailure$ = createEffect(() =>
        this.actions$.pipe(
            ofType(authActions.signUpFailure),
            tap((action) => {
                console.error(`sign up failed for  ${action?.params?.signUpRequest}: ${action?.params?.msg}`);
                this.router.navigateByUrl("/auth/sign-up")
            }),
            map((action) => {
                return authActions.loadUserFailedMsgOnSignUpailure({ signUpFailure: action?.params })
            })
        ),
    );

}