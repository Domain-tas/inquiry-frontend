import { DataSource } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IInquiry } from 'src/app/models/IInquiry';
import { InquiriesService } from './inquiries.service';

@Injectable()
export class InquiryDataSourceService extends DataSource<IInquiry>{

  inquiries$ = new BehaviorSubject<IInquiry[]>([]);
  isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private inquiriesService: InquiriesService) {
    super();
  }

  connect(): Observable<IInquiry[]> {
    return this.inquiries$.asObservable()
  }

  disconnect(): void {
    this.inquiries$.complete;
  }

  loadInquiries(): void {
    this.isLoading$.next(true);
    this.inquiriesService.getInquiries().subscribe((inquiries) => {
      this.inquiries$.next(inquiries)
    });
    this.isLoading$.next(false);
  }

  sort(){

  }

}
