import { NgModule } from '@angular/core';

import { AuthPageRoutingModule } from './auth-page-routing.module';
import { AuthPageComponent } from './auth-page.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule, NbLayoutModule, NbMenuModule, NbSidebarModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { DashboardModule } from '../pages/dashboard/dashboard.module';
import { ECommerceModule } from '../pages/e-commerce/e-commerce.module';
import { MiscellaneousModule } from '../pages/miscellaneous/miscellaneous.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NbAuthModule } from '@nebular/auth';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  imports: [
    AuthPageRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NbLayoutModule,
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,

    NbAuthModule
  ],
  declarations: [
    AuthPageComponent,LoginComponent, ForgotPasswordComponent, SignUpComponent
  ]
})
export class AuthPageModule { }
