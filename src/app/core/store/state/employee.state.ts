import {Employee} from '../../models/employees.model';
import {NewEmployees} from '../../../MOCK-DATA/mock-data';

export interface EmployeeState {
  employeeList: Employee[];
  selectedEmployee: Employee;
}

export const initialEmployeeState: EmployeeState = {
  employeeList: NewEmployees,
  selectedEmployee: null
};
