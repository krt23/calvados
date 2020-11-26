import {Users} from '../../MOCK-DATA/mock-data';
import {UsersInterface} from '../models/users.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: UsersInterface;
}

const initialState = {
  users: Users
};

export function authReducer(state= initialState, action: AuthActions.AuthActions) {
  // return state;
  switch (action.type) {
    case AuthActions.LOGIN:
      const user = state[action.payload.login];
      return {
        state,
      };
    case AuthActions.LOGOUT:
      return {
        state,
      };

    default:
      return state;
  }

}
