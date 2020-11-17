export interface EmployeesInterface {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  birthday: string;
  email: string;
  phone: string;
  project: string;
  position: string;
  dateStart: string;
  skills: string;
}

export interface Employees {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
}

export interface NewEmployee {
  id: number;
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  middleName: string;
}

