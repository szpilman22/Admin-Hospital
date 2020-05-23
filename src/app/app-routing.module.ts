// import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Page404Component } from './shared/page404/page404.component';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: Page404Component, pathMatch: 'full' }

];

export const APP_ROUTES = RouterModule.forRoot( routes, {useHash: true} )


// @NgModule({
//   imports: [RouterModule.forRoot(routes, {useHash: true})],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
