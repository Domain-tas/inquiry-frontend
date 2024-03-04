import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient,
    private cookieService: CookieService) { }


  get(url: string): Observable<any> {
    return this.http.get(url, this.createRequestHeader());
  }

  postForm(url: string, body: FormGroup): Observable<any> {
    return this.http.post(url, JSON.stringify(body), this.createRequestHeader());
  }

  private createRequestHeader() {
    const requestHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.getUserBearerToken(),
      })
    };
    return requestHeaders;
  }

  private getUserBearerToken() {
    return `Bearer ${this.cookieService.get('AuthToken')}`;
  }
}
