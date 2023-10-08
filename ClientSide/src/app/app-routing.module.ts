import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/contact/contact.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AboutComponent } from './Components/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component:HomeComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'gallery', component:GalleryComponent},
  {path: '**', component:NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
