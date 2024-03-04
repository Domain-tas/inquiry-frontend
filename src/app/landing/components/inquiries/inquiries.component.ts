import { Component, OnInit } from '@angular/core';
import { InquiriesService } from '../../services/inquiries.service';
import { InquiryDataSourceService } from '../../services/inquiry-data-source.service';
import { MatDialog} from '@angular/material/dialog';
import { CreateInquiryDialog } from '../../dialogs/create-inquiry-dialog/create-inquiry-dialog.component';
import { InquiryType } from 'src/app/models/enums/InquiryType';
import { InquiryStatus } from 'src/app/models/enums/InquiryStatus';

@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.scss']
})
export class InquiriesComponent implements OnInit {

  inquiriesDataSource = new InquiryDataSourceService(this.inquiriesService);
  tableColumns = ['id', 'date', 'type', 'status'];
  inquiryTypes: string[] = [];
  inquiryStatus: string[] = [];
  interval: any

  constructor(
    private inquiriesService: InquiriesService,
    private dialog: MatDialog
  ) {
    for (let element in InquiryType) {
      if (isNaN(Number(element))) {
        this.inquiryTypes.push(element)
      }
    }
    for (let element in InquiryStatus) {
      if (isNaN(Number(element))) {
        this.inquiryStatus.push(element)
      }
    }
  }

  ngOnInit(): void {
    this.inquiriesDataSource.loadInquiries();
    this.interval = setInterval(() => {
      this.inquiriesDataSource.loadInquiries();
    }, 60000);
  }

  createNewInquiry() {
    const dialogRef = this.dialog.open(CreateInquiryDialog);

    dialogRef.afterClosed().subscribe(result => {
      setTimeout(() => {
        this.inquiriesDataSource.loadInquiries();
      }, 1000);
    });
  }

}
