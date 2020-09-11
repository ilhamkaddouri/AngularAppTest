import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {AppMaterialsModule} from '../app-materials/app-materials.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    AppMaterialsModule,
    FlexLayoutModule,
    RouterModule
  ], 
  exports :[
    HeaderComponent, FooterComponent, SidebarComponent
  ]
})
export class SharedModule { }
