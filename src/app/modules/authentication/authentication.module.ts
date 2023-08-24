import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthenticationPageComponent } from './authentication-page.component';
import { AuthenticationRoutingModule } from './authentication.routing';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    AuthenticationPageComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule 
  ]
})
export class AuthenticationModule { }
