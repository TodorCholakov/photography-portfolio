import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';

const appRoutes:Routes = [
  {path:'', component:HomePageComponent},
  {path:'contact', component:GalleriesComponent},
  {path:'gallery', component:GalleriesComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    GalleriesComponent,
    GalleryItemComponent,
    HomePageComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
