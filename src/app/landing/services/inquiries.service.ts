import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from 'src/app/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class InquiriesService {

  baseUrl = 'http://localhost:5108';

  constructor(private http: HttpClient, private api: ApiService) { }

  getInquiries(): Observable<any> {
    return this.api.get(this.baseUrl + '/api/v1/Inquiry');
  }

  postInquiry(form: FormGroup): Observable<any> {
    return this.api.postForm(this.baseUrl + '/api/v1/Inquiry', form);
  }
}
