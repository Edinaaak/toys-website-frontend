import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddArtPtgComponent } from './add-art-ptg/add-art-ptg.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AddArtPtgComponent
  ],
  imports: [
   BrowserModule,
   FormsModule,
   ReactiveFormsModule,
   HttpClientModule,
   AppRoutingModule,
   RouterModule.forRoot([
    {path:'home', component:HomeComponent },
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'add-art-ptg', component:AddArtPtgComponent}
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
