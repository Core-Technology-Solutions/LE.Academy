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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    BoxesComponent,
    AboutComponent,
    ImportantComponent,
    ImagesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
