import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import {Image} from "../../models/image"
import { Subscription } from 'rxjs';
import { AuthService } from "../../auth/auth.service"
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;

  contactForm:FormGroup;
  images: Image []= []
  constructor(
    private imageService: ImageService, 
  private authService: AuthService,
  private fb:FormBuilder) { }
  submit() {
    console.log("Form Submitted")
    console.log(this.contactForm.value)
  }
  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    this.imageService.getAll().subscribe(p=>this.images = p)
  });
  this.contactForm = this.fb.group({
    country: [null]
  });
}

clicked():void{
  console.log("aaaaaaaaaaaaaaaa")
} 
}
