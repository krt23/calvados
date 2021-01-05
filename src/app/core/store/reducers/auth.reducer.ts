import * as AuthActions from '../actions/auth.actions';
import {initialUserState} from '../state/auth.state';

export function authReducer(state= initialUserState, action: AuthActions.AuthActions) {
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
