import { Component, HostListener  } from '@angular/core';
import { DownloadPDFService } from '../../Services/download-pdf.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isNavbarHidden = false;
  constructor(private downloadPDFService: DownloadPDFService) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Check the scroll position and toggle the CSS class accordingly
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
      this.isNavbarHidden = true;
    } else {
      this.isNavbarHidden = false;
    }
  }

downloadPdf() {
    this.downloadPDFService.downloadPdf();
  }

}
