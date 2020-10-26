export enum HeaderState {
  projects,
  calendar,
  employees,
  secretSanta,
  other
}

export interface IRoutesMatch {
  route: string;
  exactMatch: boolean;
}

export interface IHeaderStateRoutesMatch {
  projects: IRoutesMatch;
  calendar: IRoutesMatch;
  employees: IRoutesMatch;
  secretSanta: IRoutesMatch;
}

export const headerStateRoutesMatch: IHeaderStateRoutesMatch = {
  projects: {
    route: '/projects',
    exactMatch: true
  },
  calendar: {
    route: '/calendar',
    exactMatch: false
  },
  employees: {
    route: '/employees',
    exactMatch: false
  },
  secretSanta: {
    route: '/secret-santa',
    exactMatch: true
  }
};
