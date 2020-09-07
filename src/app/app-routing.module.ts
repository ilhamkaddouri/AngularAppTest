import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './core/guard/auth.guard'
import {AppMaterialsModule} from './app-materials/app-materials.module'
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
    canActivate : [AuthGuard]
  }
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes),AppMaterialsModule],
  exports: [RouterModule,AppMaterialsModule]
})
export class AppRoutingModule { }
