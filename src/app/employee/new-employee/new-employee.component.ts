import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NewEmployee} from '../../core/models/employees.model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.scss']
})
export class NewEmployeeComponent implements OnInit, OnDestroy {
  public employee: NewEmployee;
  private unsubscribe$: Subject<void> = new Subject<void>();
  public employeeProfileEditForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
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
