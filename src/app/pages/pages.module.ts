import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from './../shared/shared.module';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent
  ],

  exports: [
    DashboardComponent
],

  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }
