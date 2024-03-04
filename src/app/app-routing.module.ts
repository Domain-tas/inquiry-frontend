import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { authGuard } from './services/auth.guard';

const routes: Routes = [
   {
     path: 'landing',
     canActivate: [authGuard],
    loadChildren: () =>
      import('src/app/landing/landing.module').then(m => m.LandingModule)
  },
  {path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
