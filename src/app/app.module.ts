import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
   BrowserModule,
   RouterModule.forRoot([
    {path:'home', component:HomeComponent },
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
