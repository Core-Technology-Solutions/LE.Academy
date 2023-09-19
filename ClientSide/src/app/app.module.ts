import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { BoxesComponent } from './Components/boxes/boxes.component';
import { AboutComponent } from './Components/about/about.component';
import { ImportantComponent } from './Components/important/important.component';
import { ImagesComponent } from './Components/images/images.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContactComponent } from './Components/contact/contact.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { NavComponent } from './Components/nav/nav.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ScrollToTopComponent } from './Components/scroll-to-top/scroll-to-top.component';
import { WhatsAppIconComponent } from './Components/whats-app-icon/whats-app-icon.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    BoxesComponent,
    AboutComponent,
    ImportantComponent,
    ImagesComponent,
    FooterComponent,
    ContactComponent,
    GalleryComponent,
    NavComponent,
    HomeComponent,
    NotFoundComponent,
    ScrollToTopComponent,
    WhatsAppIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
