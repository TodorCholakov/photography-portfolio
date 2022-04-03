import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { Image } from '../image/image.model';
import { ImageService } from '../image/image.service';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private imageService: ImageService,
    private authService: AuthService
  ) {}

  storeImages() {
  //const images = this.imageService.getImages();
  const images = [{aa:"aaaaaaaaaa"}, {bb:"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}]
    
    this.http
      .put(
       'https://todorcholakovgoproject-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        images
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Image[]>(
        'https://todorcholakovgoproject-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
      )
      .pipe(
        map(images => {
          return images.map(image => {
            console.log(image)
            return {
              
              ...image,
              ingredients: image.ingredients ? image.ingredients : []
            };
          });
        }),
        tap(images => {
          this.imageService.setImages(images);
        })
      );
  }
}
