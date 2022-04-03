import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Image } from './image.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class ImageService {
  imagesChanged = new Subject<Image[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tasty Schnitzel',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
  //     [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
  //   ),
  //   new Recipe(
  //     'Big Fat Burger',
  //     'What else you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
  //     [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
  //   )
  // ];
  private images: Image[] = [];



  setImages(images: Image[]) {
    this.images = images;
    this.imagesChanged.next(this.images.slice());
  }

  getImages() {
    return this.images.slice();
  }

  getImage(index: number) {
    return this.images[index];
  }

 

  addRecipe(recipe: Image) {
    this.images.push(recipe);
    this.imagesChanged.next(this.images.slice());
  }

  updateRecipe(index: number, newRecipe: Image) {
    this.images[index] = newRecipe;
    this.imagesChanged.next(this.images.slice());
  }

  deleteRecipe(index: number) {
    this.images.splice(index, 1);
    this.imagesChanged.next(this.images.slice());
  }
}
