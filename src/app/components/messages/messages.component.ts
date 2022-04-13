import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';
import { Message } from "../../models/message"
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-image',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  id: string |null = "";
  messages: Message []= []
  name = JSON.parse(localStorage.getItem("userData")).email

  constructor(  
    private messageService: ContactService,
    private router:Router) { }


    findMessages(messages: any[]): any[] {
      return messages.filter(p => p.toAuthor == JSON.parse(localStorage.getItem("userData")).email);
    }
  ngOnInit(): void {

    this.messageService.getAllAuthor().subscribe(p=>this.messages = p)
  }
  onDelete(id : string){
    if(confirm("Are you shure you want to dlete it?")){
      this.messageService.delete(id)
      this.router.navigate(["/received-messages"])
    }
  }
}
