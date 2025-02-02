import { Action, createReducer, on } from '@ngrx/store';
import { showLoader, hideLoader } from './loader.actions';

export interface LoaderState {
  loading: boolean;
}

const initialState: LoaderState = {
  loading: false,
};

export const loaderReducerFn = createReducer(
  initialState,
  on(showLoader, (state) => ({ ...state, loading: true })),
  on(hideLoader, (state) => ({ ...state, loading: false }))
);

export function loaderReducer(state: LoaderState | undefined, action: Action) {
    return loaderReducerFn(state, action);
}