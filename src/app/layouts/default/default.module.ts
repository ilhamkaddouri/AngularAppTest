import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from '../../modules/dashboard/dashboard.component'
import {DefaultComponent} from './default.component'
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/app/core/modules/posts/posts.component';
import {SharedModule} from '../../shared/shared.module'
import { AppMaterialsModule } from 'src/app/app-materials/app-materials.module';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    AppMaterialsModule
  ]
})
export class DefaultModule { }
