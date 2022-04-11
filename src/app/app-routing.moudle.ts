import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { HomePageComponent } from './home-page/home-page.component';

import { AllImagesComponent } from './components/image/allImages.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AddImage } from './image/add-image/add-image.component';
import { DetailedImageComponent } from './image/detailed-image/detailed-image.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditImageComponent } from './image/edit-image/edit-image.component';


const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'all-images', component: AllImagesComponent },
  { path: 'add-image', component: AddImage },
  { path: 'contact', component: ContactComponent },
  { path: 'detailed-image/:id', component: DetailedImageComponent },
  { path: 'detailed-image-edit/:id', component: EditImageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
