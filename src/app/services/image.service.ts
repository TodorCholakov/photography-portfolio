import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Image } from '../models/image';
import {map} from "rxjs/operators"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {


  constructor(private db: AngularFireDatabase) { }
  getAll():Observable<Image []>{
 return this.db.list <Image>("/images")
  .snapshotChanges()
  .pipe(
      map(x=>x.map(( y: any) => ({id:y.payload?.key, ...y.payload?.val() as Image})))
      )
  }

  add(image:Image){
    this.db.list<Image>("/images").push(image)
  }
}
