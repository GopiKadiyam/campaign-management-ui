export interface CommonResponse<T> {
  start: number;
  limit: number;
  total: number;
  items: T;
}


export enum LOGIN_STATUSES {
  LOGIN_FAILED = 'LOGIN_FAILED',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ATTEMPT = 'LOGIN_ATTEMPT',
  UNINITIALIZED='UNINITIALIZED'
}