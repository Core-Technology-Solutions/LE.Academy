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
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
