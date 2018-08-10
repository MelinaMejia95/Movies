import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: CarouselComponent, pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [/* CanActivateSection, Permissions */]
  })
  export class AppRoutingModule { }