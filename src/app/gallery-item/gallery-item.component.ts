import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onLoadServers(){
    this.router.navigate(['/auth'])
  }

}
