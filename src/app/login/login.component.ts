import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Users} from '../MOCK-DATA/mock-data';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public isLoading = false;
  public signInForm: FormGroup;

  constructor(
    private router: Router,
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
    const log = Users.find(({login}) => login === this.login.value);
    const pass = Users.find(({password}) => password === this.password.value);
    if (log && pass) {
      this.router.navigate(['/', 'dashboard']);
    }
  }

}
