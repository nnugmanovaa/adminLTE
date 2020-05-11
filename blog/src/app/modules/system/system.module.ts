import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { FoooterComponent } from './parts/foooter/foooter.component';
import { NavbarComponent } from './parts/navbar/navbar.component';
import { SidebarComponent } from './parts/sidebar/sidebar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [SystemComponent, FoooterComponent, NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    SystemRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SystemModule { }
