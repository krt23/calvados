import {Action} from '@ngrx/store';
import {Employee} from '../models/employees.model';

export const ADD_EMPLOYEE = '[Employees] Add Employee';
export const UPDATE_EMPLOYEE = '[Employees] Update Employee';
export const DELETE_EMPLOYEE = '[Employees] Delete Employee';

export class AddEmployee implements Action {
  readonly type = ADD_EMPLOYEE;
  constructor(public payload: Employee) {}
}

export class UpdateEmployee implements Action {
  readonly type = UPDATE_EMPLOYEE;
  constructor(public payload: { index: number, employee: Employee }) {}
}

export class DeleteEmployee implements Action {
  readonly type = DELETE_EMPLOYEE;
  constructor(public payload: number) {}
}

export type EmployeesActions =
  | AddEmployee
  | UpdateEmployee
  | DeleteEmployee;
