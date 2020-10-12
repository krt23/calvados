export interface EmployeesInterface {
  name: string;
  birthday: string;
  email: string;
  phone: string;
  project: string;
  position: string;
  dateStart: string;
  skills: string;
}

export interface ProjectsInterface {
  name: string;
  dateStart: string;
  status: string;
  descriptions: string;
  employees: Employees[];
}

export interface Employees {
  name: string;
  surname: string;
  position: string;
}
