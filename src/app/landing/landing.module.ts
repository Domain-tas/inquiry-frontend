import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { MatTableModule } from '@angular/material/table'
import { InquiryDataSourceService } from './services/inquiry-data-source.service';
import { InquiriesService } from './services/inquiries.service';
import { LandingRoutingModule } from './landing-routing.module';
import { InquiriesComponent } from './components/inquiries/inquiries.component';
import { MatButtonModule } from '@angular/material/button';
import { CreateInquiryDialog } from './dialogs/create-inquiry-dialog/create-inquiry-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    LandingComponent,
    InquiriesComponent,
    CreateInquiryDialog
  ],
  imports: [
    LandingRoutingModule,
    CommonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatSortModule
  ],
  providers: [
    InquiriesService,
    InquiryDataSourceService
  ]
})
export class LandingModule { }
