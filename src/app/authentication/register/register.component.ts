import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registrationForm: FormGroup

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.registrationForm = this.formBuilder.group({
      Name: [''],
      Password: [''],
      RepeatPassword: ['']
    });
  };

  get form() {
    return this.registrationForm.controls;
  }

  get formName() {
    return this.registrationForm.get('Name');
  }
  get formPassword() {
    return this.registrationForm.get('Password');
  }
  get formRepeatPassword() {
    return this.registrationForm.get('RepeatPassword');
  }

  registerUser() {
    this.authService.RegisterUser(this.registrationForm.value).subscribe(result => {
      this.snackBar.open('Your account was created successfully', '', {
        duration: 3000
      });
      this.redirectToLogin();
    }
    )
  }
  redirectToLogin() {
    this.router.navigate(['login']);
  }
}
