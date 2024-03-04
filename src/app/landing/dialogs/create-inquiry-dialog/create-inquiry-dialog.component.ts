import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InquiryType } from 'src/app/models/enums/InquiryType';
import { InquiriesService } from '../../services/inquiries.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-inquiry-dialog',
  templateUrl: './create-inquiry-dialog.component.html',
  styleUrls: ['./create-inquiry-dialog.component.scss']
})
export class CreateInquiryDialog {

  inquiryForm: FormGroup;
  inquiryTypes: string[] = [];

  constructor(
    public matDialogRef: MatDialogRef<CreateInquiryDialog>,
    private formBuilder: FormBuilder,
    private inquiriesService: InquiriesService,
    private snackBar: MatSnackBar
  ) {
    this.inquiryForm = this.formBuilder.group({
      Body: [''],
      Type: 0,
    });

    for (let element in InquiryType) {
      if (isNaN(Number(element))) {
        this.inquiryTypes.push(element)
      }
    }
  }

  getFromType() : number{
    return this.inquiryForm.get('Type')?.value;
  }

  sendForm() {
    this.inquiriesService.postInquiry(this.inquiryForm.value).subscribe(result => {
      this.snackBar.open(`Your ${this.inquiryTypes[this.getFromType()].toLowerCase()} was successfully sent!`, '', {
        duration: 3000
      });
    });
    this.closeForm();
  }

  closeForm() {
    this.matDialogRef.close();
  }
}
