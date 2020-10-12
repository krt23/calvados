import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public isLoading = false;
  public signInForm: FormGroup;
  constructor(
  ) {}

  ngOnInit(): void {
    this.initializeSignInForm();
  }

  public get login(): AbstractControl {return this.signInForm.get('login'); }
  public get password(): AbstractControl {return this.signInForm.get('password'); }

  private initializeSignInForm(): void {
    this.signInForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  logIn() {}

}
