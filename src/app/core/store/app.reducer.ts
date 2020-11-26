import * as fromAuth from './auth.reducer';
import * as fromEmployee from './employee.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  users: fromAuth.State;
  employeesList: fromEmployee.State;
}

export const appReducer: ActionReducerMap<any> = {
  users: fromAuth.authReducer,
  employeesList: fromEmployee.employeeReducer
};

