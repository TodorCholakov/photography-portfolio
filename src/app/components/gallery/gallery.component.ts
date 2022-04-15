import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import {Image} from "../../models/image"
import { Subscription } from 'rxjs';
import { AuthService } from "../../auth/auth.service"
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  isAuthenticated = false;
  private userSub: Subscription;
  images1:{title:string} []
  filteredImages : any[]
  contactForm:FormGroup;
  images: Image []
  includes:[]
  subscription:Subscription
  constructor(
    private imageService: ImageService, 
    private authService: AuthService,
    private router:Router,
    private fb:FormBuilder) {
      this.imageService.getAll().subscribe(images=>this.filteredImages=images)
     }

  submit() {
    console.log("Form Submitted")
    console.log(this.contactForm.value)
  }
  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    this.imageService.getAll().subscribe(p=>this.images1 = p)
  });
  this.contactForm = this.fb.group({
    country: [null]
  });
}

filter(query: string){
  this.filteredImages = (query)?
  this.images1.filter(p=>p.title.includes(query)):
  this.images1

}
}
