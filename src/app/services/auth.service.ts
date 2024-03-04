import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ITokenResponse } from '../models/ITokenResponse';

@Injectable()
export class AuthService {

  baseUrl = 'http://localhost:5108';

  constructor(private http: HttpClient) { }

  LoginUser(loginRequest: FormGroup) : Observable<ITokenResponse>{
    return this.http.post<ITokenResponse>(this.baseUrl + '/api/v1/Auth/Login', loginRequest);
  }

  RegisterUser(registrationRequest: FormGroup): Observable<any> {
    return this.http.post(this.baseUrl + '/api/v1/Auth/Register', registrationRequest);
  }

  GetInquiries(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/v1/Inquiry');
  }
}
