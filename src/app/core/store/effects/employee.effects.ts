import {Actions, Effect, ofType} from '@ngrx/effects';
import * as EmployeesActions from '../actions/employee.actions';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {Employee} from '../../models/employees.model';
import {Injectable} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {EmployeeService} from '../../services/employee.service';
import {AppState} from '../state/app.state';
import {select, Store} from '@ngrx/store';
import {GetEmployee, GetEmployees} from '../actions/employee.actions';
import {selectEmployeeList, selectSelectedEmployee} from '../selectors/employee.selector';
import {of} from 'rxjs';



// export class RecipeEffects {
//   @Effect()
//   getEmployee = this.actions$.pipe(
//     ofType<GetEmployee>(EmployeeActions.FETCH_EMPLOYEE),
//     switchMap(() => {
//       return this.http.get<Employee[]>();
//     }));
//   constructor(private actions$: Action, private http: HttpClient) {
//   }
// }

@Injectable()
export class EmployeeEffects {
  @Effect()
  getEmployee = this.actions$.pipe(
    ofType<GetEmployees>(EmployeesActions.GET_EMPLOYEE),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectEmployeeList))),
    switchMap(([id, users]) => {
      const selectedEmployee = +users.filter(user => user.id === +id)[0];
      return of(new GetEmployee(selectedEmployee));
    })
  );
  // @Effect()
  // getEmployees = this.actions$.pipe(
  //   ofType<GetEmployees>(EmployeesActions.GET_EMPLOYEES),
  //   switchMap(() => this.employeeService.getEmployees)
  // );
  // @Effect()
  // fetchEmployee = this.actions$.pipe();
  //
  constructor(
    private employeeService: EmployeeService,
    private actions$: Actions,
    private store: Store<AppState>
  ) {
  }
}
