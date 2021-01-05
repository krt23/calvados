import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Employee} from '../../core/models/employees.model';
import {Observable, Subject} from 'rxjs';
import {Store} from '@ngrx/store';
import {Location} from '@angular/common';
import {AddEmployee} from '../../core/store/actions/employee.actions';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit, OnDestroy {
  public employee: Employee;
  public employees: Observable<{employeeList: Employee[]}>;
  private unsubscribe$: Subject<void> = new Subject<void>();
  public employeeProfileEditForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private store: Store<{ employees: {employeeList: Employee[]} }>
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.employees = this.store.select('employees');
  }

  private initForm(): void {
    this.employeeProfileEditForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      middleName: new FormControl('', [Validators.required])
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.complete();
  }

  public onSubmit(): void {
    console.log('Save');
    const newEmployee = this.employeeProfileEditForm.value;
    console.log(newEmployee);
    this.store.dispatch(new AddEmployee(newEmployee));
    this.location.back();
    // this.userService.updateProfile(this.userProfileEditForm.value).subscribe(
    //   () => {
    //     if (this.userProfileEditForm.get('changePassword').value) {
    //       this.userService.updatePassword(this.userProfileEditForm.value).subscribe( () => {
    //         this.toastr.success('Password updated');
    //         this.store.dispatch(new UpdateUser(this.userProfileEditForm.value));
    //         this.router.navigate(['profile']);
    //       }, () => {
    //         this.toastr.error('Update password error');
    //       });
    //     } else {
    //       this.toastr.success('Profile updated');
    //       this.router.navigate(['profile']);
    //       this.store.dispatch(new UpdateUser(this.userProfileEditForm.value));
    //     }
    //   },
    //   () => {
    //     this.toastr.error('Update profile error');
    //   }
    // );
  }

  public get login() {return this.employeeProfileEditForm.get('login'); }
  public get password() {return this.employeeProfileEditForm.get('password'); }
  public get firstName() {return this.employeeProfileEditForm.get('firstName'); }
  public get lastName() {return this.employeeProfileEditForm.get('lastName'); }
  public get middleName() {return this.employeeProfileEditForm.get('middleName'); }
}
