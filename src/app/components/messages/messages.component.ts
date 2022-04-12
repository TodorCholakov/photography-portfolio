import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import {Image} from "../../models/image"
import { Router } from '@angular/router';


@Component({
  selector: 'app-image',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  id: string |null = "";
  images: Image []= []
  name = JSON.parse(localStorage.getItem("userData")).email

  constructor(  
    private imageService: ImageService,
    private router:Router) { }


    findNonAdults(images: any[]): any[] {
      return images.filter(p => p.author == JSON.parse(localStorage.getItem("userData")).email);
    }
  ngOnInit(): void {

    this.imageService.getAllAuthor().subscribe(p=>this.images = p)
  }
  onDelete(id:string){
    if(confirm("Are you shure you want to dlete it?")){
      this.imageService.delete(id)
      this.router.navigate(["/all-images"])
    }
  }
}
