import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
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
    const images = this.imageService.getImages();
    this.http
      .put(
       'https://todorcholakovgoproject-default-rtdb.europe-west1.firebasedatabase.app/',
        images
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://todorcholakovgoproject-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(recipes => {
          this.imageService.setRecipes(recipes);
        })
      );
  }
}
