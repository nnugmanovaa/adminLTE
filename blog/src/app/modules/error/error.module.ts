import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ErrorRoutingModule} from './error-routing.module';
import {Err404Component} from './components/err404/err404.component';
import {Err500Component} from './components/err500/err500.component';


@NgModule({
  declarations: [
    Err404Component,
    Err500Component
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule {
}
