import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { CandeactivateGuard } from './candeactivate.guard';
import { ContactComponent } from './principal/contact/contact.component';
import { DashboardComponent } from './principal/dashboard/dashboard.component';
import { HomeComponent } from './principal/home/home.component';
import { LoginComponent } from './principal/login/login.component';
import { UserComponent } from './principal/user/user.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [CanactivateGuard]},
  {path: 'user', component: UserComponent, canActivate: [CanactivateGuard]},
  {path: 'contact', component: ContactComponent, canActivate: [CanactivateGuard]},
  
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
