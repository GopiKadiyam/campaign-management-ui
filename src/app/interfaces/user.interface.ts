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
export enum COUNTRY { INDIA="INDIA",INTERNATIONAL="INTERNATIONAL" }
export enum SERVICE_TYPE { TRANSACTIONAL="TRANSACTIONAL",PROMOTIONAL="PROMOTIONAL" }
export interface Sender {
  id: number,
  senderId: string,
  description: string,
  country: COUNTRY,
  serviceType: SERVICE_TYPE,
  entityId: string,
  isOpen: string,
  statusFlag: boolean
}
export interface Template {
  id: number,
  templateId:string,
  templateBody:string,
  name:string,
  description: string,
  senderId: string,
  serviceType: SERVICE_TYPE,
  activeStatusFlag: boolean,
  createdOn:string,
  updatedOn:string
}