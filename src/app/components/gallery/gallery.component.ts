import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import {Image} from "../../models/image"
import { Subscription } from 'rxjs';
import { AuthService } from "../../auth/auth.service"

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;


  images: Image []= []
  constructor(
    private imageService: ImageService, 
  private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    this.imageService.getAll().subscribe(p=>this.images = p)
  });
}
}
