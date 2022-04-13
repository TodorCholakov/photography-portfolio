import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Message } from '../models/message';
import {map} from "rxjs/operators"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor(private db: AngularFireDatabase) { }


     
  sent(message:Message){
    this.db.list<Message>("/messages").push(message)
  }

    getAllAuthor():Observable<Message []>{
    return this.db.list <Message>("/messages")
     .snapshotChanges()
     .pipe(
         map(x=>x.map(( y: any) => ({id:y.payload?.key, ...y.payload?.val() as Message})))
         )
     }

     delete (messageId: string){
      this.db.object<Message>("/messages/"+messageId).remove()
    }
}
