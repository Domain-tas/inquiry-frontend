import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ITokenResponse } from 'src/app/models/ITokenResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService,
  ) {
    this.loginForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Password: ['',
        Validators.required
      ],
    })
  }
  ngOnInit(): void {
    let tokenExists = this.cookieService.check('AuthToken');

  }

  //Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),

  loginUser() {
    this.authService.LoginUser(this.loginForm.value).subscribe((response: ITokenResponse) => {
      this.cookieService.set(
        'AuthToken',
        response.token,
        response.expires / 24 / 60 ,
        '/'
      );
      this.router.navigateByUrl('/landing');
    }
    )
  }

  redirectToRegister() {
    this.router.navigate(['register']);
  }
}
