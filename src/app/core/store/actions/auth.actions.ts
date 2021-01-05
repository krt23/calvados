import {Action} from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


export class Login implements Action {
  readonly type = LOGIN;
  constructor(
    public payload: {
      login: string;
      userId: string;
      token: string;
    }
  ) {
  }
}

export class Logout implements Action {
  readonly type = LOGOUT;
  constructor(
    public payload: {
      login: string;
      userId: string;
      token: string;
    }
  ) {
  }
}

export type AuthActions =
  | Login
  | Logout;

