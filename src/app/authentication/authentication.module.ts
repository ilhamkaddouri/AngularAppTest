import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import {AppMaterialsModule} from './../app-materials/app-materials.module';
import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    AppMaterialsModule
  ]
})
export class AuthenticationModule { }
