import {Employees, NewEmployees, Users} from '../../MOCK-DATA/mock-data';
import {Action} from '@ngrx/store';
import * as EmployeeActions from './employee.actions';
import {UsersInterface} from '../models/users.model';
import {Employee} from '../models/employees.model';

export interface State {
  employees: Employee[];
}

const initialState: State = {
  employees: NewEmployees
};

export function employeeReducer(state = initialState, action: EmployeeActions.EmployeesActions) {
  switch (action.type) {
    case EmployeeActions.ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload]
      };
    // case EmployeeActions.UPDATE_EMPLOYEE:
    //   const employee = state.employees[action.payload.index];
    //   const updateEmployee = {
    //     ...employee,
    //     ...action.payload.employee,
    //
    //   };
    //   const updateEmployees = [...state.employees];
    //   updateEmployees[action.payload.index] = updateEmployee
    //   return {
    //     ...state,
    //     employees: updateEmployees
    //   };
    // case EmployeeActions.DELETE_EMPLOYEE:
    //   return {
    //     ...state,
    //     employees: state.employees.filter((ig, igIndex) => {
    //       return igIndex !== action.payload;
    //     })
    //   };
    default:
      return state;
  }

}
