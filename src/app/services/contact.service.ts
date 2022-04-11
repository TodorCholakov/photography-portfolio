import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Message } from '../models/message';


@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor(private db: AngularFireDatabase) { }


     
  sent(message:Message){
    this.db.list<Message>("/messages").push(message)
  }
  
}
