import { Component, OnInit  } from '@angular/core';
import { GalleryItem } from '../../Interfaces/gallery-item.model';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  showImages = true;

  filterImages() {
    this.showImages = true;
  }

  filterVideos() {
    this.showImages = false;
  }

}
