import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-detailed-image',
  templateUrl: './detailed-image.component.html',
  styleUrls: ['./detailed-image.component.css']
})
export class DetailedImageComponent implements OnInit {
  id: string |null = "";
image:Image

  constructor(
    private imageService: ImageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    if (this.id){
      this.imageService.get(this.id).subscribe(p=>this.image = p)
    }
   
  }

}
