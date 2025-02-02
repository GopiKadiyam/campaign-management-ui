import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { authReducer } from "./auth/auth.reducer";
import { loaderReducer } from "./loaders/loader.reducer";


export const appReducers: ActionReducerMap<AppState> = {
    userInfo: authReducer,
    loaderInfo: loaderReducer
  };