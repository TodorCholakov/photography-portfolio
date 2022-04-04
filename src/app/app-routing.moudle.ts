import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { GalleryComponent } from './gallery/galleries.component';
import { AddImage } from './image/add-image/add-image.component';
import { ImageComponent } from './components/image/image.component';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery', component: GalleryComponent },
  


  { path: 'auth', component: AuthComponent },
  { path: 'all-images', component: ImageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
