import {  UserState } from "./auth/auth.reducer";
import { LoaderState } from "./loaders/loader.reducer";

export interface AppState{
    userInfo: UserState,
    loaderInfo: LoaderState
}