import {AppState} from '../state/app.state';
import {createSelector} from '@ngrx/store';
import {EmployeeState} from '../state/employee.state';

const selectEmployees = (state: AppState) => state.employees;

export const selectEmployeeList = createSelector(
  selectEmployees,
  (state: EmployeeState) => state.employeeList
);

export const selectSelectedEmployee = createSelector(
  selectEmployees,
  (state: EmployeeState) => state.selectedEmployee
);
