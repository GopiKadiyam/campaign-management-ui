export interface Login {
  username: string;
  password: string;
}

export interface LoginFailed {
  emailOrPhone: string;
  password: string;
}

export interface SignUp {
  username: string;
  email: string;
  password: string;
}
