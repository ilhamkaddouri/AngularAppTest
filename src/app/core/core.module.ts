import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard} from './guard/auth.guard'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {HeadersInterceptor} from './interceptors/headers.interceptor'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers : [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,useClass:HeadersInterceptor,multi:true
    }
  ]
})
export class CoreModule { }
