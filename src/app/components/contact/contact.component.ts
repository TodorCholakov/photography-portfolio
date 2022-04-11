import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    private contactService:ContactService,
    private router:Router) { }

  ngOnInit(): void {
   
  }
  sentMessage(f:NgForm){
    this.contactService.sent(f.value);
    console.log(f.value)
    
    this.router.navigate(["/"])
  }

}
