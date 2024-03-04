import { AfterContentInit, AfterViewChecked, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IInquiry } from 'src/app/models/IInquiry';
import { InquiriesService } from './services/inquiries.service';
import { InquiryDataSourceService } from './services/inquiry-data-source.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent{

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }

  logOut() {
    this.cookieService.delete('AuthToken');
    this.router.navigateByUrl('/login');
  }
}
