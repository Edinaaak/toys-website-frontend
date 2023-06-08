import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { OAuthModule } from 'angular-oauth2-oidc';
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
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { DetailsArtPtgComponent } from './details-art-ptg/details-art-ptg.component';
import { ShortPipe } from './short.pipe';
import { AddAuditoriumComponent } from './add-auditorium/add-auditorium.component';
import { AddPlaceComponent } from './add-place/add-place.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { JuryListComponent } from './jury-list/jury-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ControlComponent } from './control/control.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { userReducer } from './store/reducers/user.reducer';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AddArtPtgComponent,
    GalleryComponent,
    AboutComponent,
    DetailsArtPtgComponent,
    ShortPipe,
    AddAuditoriumComponent,
    AddPlaceComponent,
    FooterComponent,
    ProfileComponent,
    JuryListComponent,
    UpdateUserComponent,
    ControlComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    UnauthorizedComponent
  ],
  imports: [
   BrowserModule,
   FormsModule,
   ReactiveFormsModule,
   HttpClientModule,
   OAuthModule.forRoot(),
   SocialLoginModule,
   AppRoutingModule,
   StoreModule.forRoot({user: userReducer}),
   OAuthModule.forRoot(),
   RouterModule.forRoot([
    {path:'', component:HomeComponent },
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'add-art-ptg', component:AddArtPtgComponent},
    {path:'about', component: AboutComponent},
    {path:'gallery', component:GalleryComponent},
    {path:'gallery/:id', component:DetailsArtPtgComponent},
    {path:'add-place', component:AddPlaceComponent},
    {path:'add-auditorium', component:AddAuditoriumComponent},
    {path:'profile', component:ProfileComponent},
    {path:'jury-list', component:JuryListComponent},
    {path:'update-user/:id', component:UpdateUserComponent},
    {path:'control', component:ControlComponent},
    {path:'forgot-password', component:ForgotPasswordComponent},
    {path:'change-password/:token', component:ChangePasswordComponent},
    {path:'not-found', component : NotFoundComponent},
    {path:'unauthorized', component: UnauthorizedComponent},
   ]),
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true, //keeps the user signed in
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('31089605275-t86ckn25dhji9u0l7elngv1kr8gkkcb8.apps.googleusercontent.com') // your client id
        }
      ]
    }
  },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
