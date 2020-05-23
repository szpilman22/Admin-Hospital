import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from './../shared/shared.module';
import { FeatureRoutingModule } from './pages.routes';

@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent
  ],

  exports: [
    PagesComponent,
    DashboardComponent
],

  imports: [
    CommonModule,
    SharedModule,
    FeatureRoutingModule
  ]
})
export class PagesModule { }
