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
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { DetailsArtPtgComponent } from './details-art-ptg/details-art-ptg.component';
import { ShortPipe } from './short.pipe';
import { AddAuditoriumComponent } from './add-auditorium/add-auditorium.component';
import { AddPlaceComponent } from './add-place/add-place.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { JuryListComponent } from './jury-list/jury-list.component';

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
    JuryListComponent
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
    {path:'add-art-ptg', component:AddArtPtgComponent},
    {path:'about', component: AboutComponent},
    {path:'gallery', component:GalleryComponent},
    {path:'gallery/:id', component:DetailsArtPtgComponent},
    {path:'add-place', component:AddPlaceComponent},
    {path:'add-auditorium', component:AddAuditoriumComponent},
    {path:'profile', component:ProfileComponent},
    {path:'jury-list', component:JuryListComponent}
   ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
