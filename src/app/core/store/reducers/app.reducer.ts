import {authReducer} from './auth.reducer';
import {employeeReducer} from './employee.reducer';
import {ActionReducerMap} from '@ngrx/store';
import {projectReducer} from './project.reducer';

export const appReducer: ActionReducerMap<any> = {
  users: authReducer,
  employees: employeeReducer,
  projects: projectReducer
};

