import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImageService } from 'src/app/services/image.service';
import { Router } from '@angular/router';


@Component({
  selector: 'add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImage implements OnInit{
  constructor(private imageService:ImageService,
    private router:Router){

  }
  ngOnInit():void{

  }
  addImage(f:NgForm){
    this.imageService.add(f.value);
    console.log(f.value)
    this.router.navigate(["/"])
  }
}

