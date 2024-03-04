import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInquiryDialog } from './create-inquiry-dialog.component';

describe('CreateInquiryDialogComponent', () => {
  let component: CreateInquiryDialog;
  let fixture: ComponentFixture<CreateInquiryDialog>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateInquiryDialog]
    });
    fixture = TestBed.createComponent(CreateInquiryDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
