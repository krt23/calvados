import {Action} from '@ngrx/store';
import {Employee} from '../../models/employees.model';

export const GET_EMPLOYEE = '[Employee] Get Employee';
export const GET_EMPLOYEES = '[Employee] Get Employees';
export const ADD_EMPLOYEE = '[Employee] Add Employee';
export const UPDATE_EMPLOYEE = '[Employee] Update Employee';
export const DELETE_EMPLOYEE = '[Employee] Delete Employee';
export const FETCH_EMPLOYEE = '[Employee] Fetch Employee';

export class GetEmployee implements Action {
  readonly type = GET_EMPLOYEE;
  constructor(public payload: number) {}
}

export class GetEmployees implements Action {
  readonly type = GET_EMPLOYEES;
  constructor(public payload: Employee[]) {}
}

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

export class FetchEmployee implements Action {
  readonly type = FETCH_EMPLOYEE;
}

export type EmployeesActions = GetEmployee | GetEmployees | AddEmployee | UpdateEmployee | DeleteEmployee;
