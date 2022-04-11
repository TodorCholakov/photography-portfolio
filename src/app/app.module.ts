import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.moudle';

import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { HomePageComponent } from './home-page/home-page.component';

import { AddImage } from './image/add-image/add-image.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { AngularFireModule } from "@angular/fire/compat";

import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AllImagesComponent } from './components/image/allImages.component';
import { GalleryComponent } from './components/gallery/gallery.component';

import { DetailedImageComponent } from './image/detailed-image/detailed-image.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditImageComponent } from './image/edit-image/edit-image.component';


@NgModule({
  declarations: [
    AppComponent,
    AddImage,
    HeaderComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    HomePageComponent,
    AllImagesComponent,
    GalleryComponent,
    DetailedImageComponent,
    ContactComponent,
    EditImageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [

 
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
