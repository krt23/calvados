import {initialUserState, UserState} from './auth.state';
import {EmployeeState, initialEmployeeState} from './employee.state';
import {initialProjectState, ProjectState} from './project.state';

export interface AppState {
  users: UserState;
  employees: EmployeeState;
  projects: ProjectState;
}

export const initialAppState: AppState = {
  users: initialUserState,
  employees: initialEmployeeState,
  projects: initialProjectState
};

export function getInitialState(): AppState {
  return initialAppState;
}
