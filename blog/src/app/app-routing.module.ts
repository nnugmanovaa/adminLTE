import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGateGuard} from './core/guards/auth-gate.guard';
import {UnAuthGateGuard} from './core/guards/un-auth-gate.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/system/system.module').then(m => m.SystemModule),
    canActivate: [AuthGateGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
    canActivate: [UnAuthGateGuard]
  },
  {
    path: 'error',
    loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule)
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
