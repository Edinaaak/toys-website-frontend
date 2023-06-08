import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { RegisterComponent } from './register/register.component';
import { AddPlaceComponent } from './add-place/add-place.component';
import { AdminGuardService } from './admin-guard.service';
import { AddAuditoriumComponent } from './add-auditorium/add-auditorium.component';
import { JuryListComponent } from './jury-list/jury-list.component';
import { ControlComponent } from './control/control.component';
import { LoginGuardService } from './login-guard.service';
import { ProfileComponent } from './profile/profile.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddArtPtgComponent } from './add-art-ptg/add-art-ptg.component';
import { PainterGuardService } from './painter-guard.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotFoundGuardService } from './not-found-guard.service';
import { HomeComponent } from './home/home.component';



const routes: Routes = [


  {
    path:'login',
    component: LoginComponent,
    canActivate : [AuthGuardService]
  },
  {
    path:'register',
    component : RegisterComponent,
    canActivate : [AuthGuardService]
  }
  ,
  {
    path:'forgot-password',
    component:ForgotPasswordComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'change-password/:token',
    component:ChangePasswordComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:'add-place',
    component : AddPlaceComponent,
    canActivate : [AdminGuardService]
  },
  {
    path:'add-auditorium',
    component:AddAuditoriumComponent,
    canActivate : [AdminGuardService]
  },
  {
    path:'jury-list',
    component:JuryListComponent,
    canActivate: [AdminGuardService]
  },
  {
    path:'control',
    component: ControlComponent,
    canActivate:[AdminGuardService]
  },
  {
    path:'add-place',
    component : AddPlaceComponent,
    canActivate : [LoginGuardService]
  },
  {
    path:'add-auditorium',
    component:AddAuditoriumComponent,
    canActivate : [LoginGuardService]
  },
  {
    path:'jury-list',
    component:JuryListComponent,
    canActivate: [LoginGuardService]
  },
  {
    path:'control',
    component: ControlComponent,
    canActivate:[LoginGuardService]
  },
  {
    path:'profile',
    component: ProfileComponent,
    canActivate : [LoginGuardService]
  },
  {
    path:'update-user/:id',
    component:UpdateUserComponent,
    canActivate : [LoginGuardService]
  },
  {
    path:'add-art-ptg',
    component:AddArtPtgComponent,
    canActivate:[PainterGuardService]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
