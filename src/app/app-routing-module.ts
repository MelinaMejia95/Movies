import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [/* CanActivateSection, Permissions */]
  })
  export class AppRoutingModule { }