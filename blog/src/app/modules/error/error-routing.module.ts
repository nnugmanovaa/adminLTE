import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Err404Component} from './components/err404/err404.component';
import {Err500Component} from './components/err500/err500.component';


const routes: Routes = [
  {
    path: '404',
    component: Err404Component
  },
  {
    path: '500',
    component: Err500Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule {
}
