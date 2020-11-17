import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Users} from '../MOCK-DATA/mock-data';
import {Router} from '@angular/router';
import {AuthService} from '../core/services/auth.service';
import {catchError, switchMap, take} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {ConsoleLogger} from '@angular/compiler-cli/ngcc';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public isLoading = false;
  public signInForm: FormGroup;
  public error: string = null;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.initializeSignInForm();
  }

  public get login(): AbstractControl {
    return this.signInForm.get('login');
  }

  public get password(): AbstractControl {
    return this.signInForm.get('password');
  }

  private initializeSignInForm(): void {
    this.signInForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  logIn() {
    if (!this.signInForm.valid) {
      return;
    }
    this.isLoading = true;
    this.authService.login(this.login.value, this.password.value).subscribe(result => {
      console.log(result);
      this.router.navigate(['/', 'dashboard']);
      },
      error => {
        this.error = 'Auth data error';
        this.isLoading = false;
      });
  }

}
