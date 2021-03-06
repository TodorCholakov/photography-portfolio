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
  public user = JSON.parse(localStorage.getItem("userData")).email
  constructor(
    private imageService:ImageService,
    private router:Router,
    ){
  
  }
  ngOnInit():void{
    
  }
  
  addImage(f:NgForm){
    if (f.value.imageUrl!="" && f.value.title!="" && f.value.description!="" && f.value.techData!=""){
      this.imageService.add(f.value);
      this.router.navigate(["/all-images"])
    } else {
      alert("Please fill all the fields")
    }
  
  }
}

