import { InquiryStatus } from "./enums/InquiryStatus";
import { InquiryType } from "./enums/InquiryType";

export interface IInquiry{
  Id: string,
  Date: Date,
  Type: InquiryType,
  Status: InquiryStatus
}
