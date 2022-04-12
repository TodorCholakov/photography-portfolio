import { Injectable } from '@angular/core';
import { AngularFireDatabase, snapshotChanges } from '@angular/fire/compat/database';
import { Image } from '../models/image';
import {map} from "rxjs/operators"
import { Observable } from 'rxjs';
import { WhereFilterOp } from '@angular/fire/firestore';
import { query, where } from '@firebase/firestore';
import { __values } from 'tslib';

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


  //return this.db.list <Image>("/images", ref => (ref.orderByChild('description')))
  getAllAuthor():Observable<Image []>{
    return this.db.list <Image>("/images")
     .snapshotChanges()
     .pipe(
         map(x=>x.map(( y: any) => ({id:y.payload?.key, ...y.payload?.val() as Image})))
         )
     }


  get(id:string):Observable<Image >{
    return this.db.object <Image>("/images/"+id)
     .snapshotChanges()
     .pipe(
         map((( y: any) =>  ({id:y.payload?.key, ...y.payload?.val() as Image})))
         )
     }
     
  add(image:Image){
    this.db.list<Image>("/images").push(image)
  }
  update (imageId: string, image:Image): void{
    this.db.object<Image>("/images/"+imageId).update(image)
  }
  delete (imageId: string){
    this.db.object<Image>("/images/"+imageId).remove()
  }
}
