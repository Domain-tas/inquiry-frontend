import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { InquiriesComponent } from './components/inquiries/inquiries.component';
import { authGuard } from '../services/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: LandingComponent,
    children: [
      { path: 'inquiries', component: InquiriesComponent },
      { path: '', redirectTo: 'inquiries', pathMatch: 'full'}
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {

}
