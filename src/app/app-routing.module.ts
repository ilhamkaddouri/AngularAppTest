import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './core/guard/auth.guard'
import {AppMaterialsModule} from './app-materials/app-materials.module'
import { DefaultModule } from './layouts/default/default.module';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './app/core/modules/posts/posts.component';
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./modules/account/account.module').then(m => m.AccountModule),
    canActivate : [AuthGuard]
  },
  {
    path : '',
    component : DefaultComponent,
    children : [{
      path : '',
      component : DashboardComponent
    },{
      path : 'posts',
      component : PostsComponent
    }]
  }
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes),AppMaterialsModule],
  exports: [RouterModule,AppMaterialsModule]
})
export class AppRoutingModule { }
