import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import {Image} from "../../models/image"
import { Router } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: './allImages.component.html',
  styleUrls: ['./allImages.component.css']
})
export class AllImagesComponent implements OnInit {
  id: string |null = "";
  images: Image []= []
  constructor(
    private imageService: ImageService,
    private router:Router) { }

  ngOnInit(): void {

    this.imageService.getAll().subscribe(p=>this.images = p)
  }
  onDelete(id:string){
    if(confirm("Are you shure you want to dlete it?")){
      this.imageService.delete(id)
      this.router.navigate(["/all-images"])
    }
  }
}
