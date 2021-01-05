import {ADD_EMPLOYEE, EmployeesActions} from '../actions/employee.actions';
import {initialEmployeeState} from '../state/employee.state';


export function employeeReducer(state = initialEmployeeState, action: EmployeesActions) {
  switch (action.type) {
    // case EmployeeActions.GET_EMPLOYEES:
    //   return {
    //     ...state,
    //     employees: action.payload
    //   };
    // case EmployeeActions.GET_EMPLOYEE:
    //   return {
    //     ...state,
    //     selectedEmployee: action.payload
    //   };
    case ADD_EMPLOYEE:
      return {
        ...state,
        employeeList: [...state.employeeList, action.payload]
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
