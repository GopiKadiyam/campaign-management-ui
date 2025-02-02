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