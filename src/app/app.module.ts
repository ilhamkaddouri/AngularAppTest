import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppMaterialsModule} from './app-materials/app-materials.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import {RouterModule} from '@angular/router';
import {CoreModule} from './core/core.module'
import { HttpClientModule } from '@angular/common/http';
import {DefaultModule} from '../app/layouts/default/default.module';
import { PostsComponent } from './app/core/modules/posts/posts.component'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialsModule,
    CoreModule,
    HttpClientModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
