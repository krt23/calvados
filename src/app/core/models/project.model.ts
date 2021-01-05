import {Employees} from './employees.model';

export interface ProjectInterface {
  id: number;
  name: string;
  dateStart: string;
  status: string;
  descriptions: string;
  employees: Employees[];
}
