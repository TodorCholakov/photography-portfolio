import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';
import { Image } from 'src/app/models/image';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.css']
})
export class EditImageComponent implements OnInit {
  id: string |null = "";
image:Image

  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute,
    private router:Router)

   
  { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    if (this.id){
      this.imageService.get(this.id).subscribe(p=>{this.image = p})
    }
   
  }

  updateImage(f:NgForm){
  let id = this.id as string
   this.imageService.update(id, f.value)
   this.router.navigate(["/all-images"])
  }
 
}
