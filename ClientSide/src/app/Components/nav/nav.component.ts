import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isNavbarHidden = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Check the scroll position and toggle the CSS class accordingly
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
      this.isNavbarHidden = true;
    } else {
      this.isNavbarHidden = false;
    }
  }
}
