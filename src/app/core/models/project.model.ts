import {Employees} from './employees.model';

export interface ProjectsInterface {
  name: string;
  dateStart: string;
  status: string;
  descriptions: string;
  employees: Employees[];
}
