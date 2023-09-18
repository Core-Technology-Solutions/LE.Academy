import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 200; // Show the button when the user scrolls down 200 pixels or more
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
  }

  showScrollButton = false; // Initially, hide the button
}
