export interface UserDetails {
  id: number;
  username:string,
  email: string;
  roles?: string[];
  accessToken?: string;
  tokenType?: string;
}

export interface LoginFailure{
  loginRequest: any, 
  loginFailedRes: any,
  msg: string
}

export interface GlobalError {
  status: string;
  errorMsg: string;
  errorType: string;
  path: string;
  timestamp: string;
  errors: any
}

export interface SignUpFailure{
  signUpRequest: any, 
  signUpError: GlobalError,
  msg: string
}
