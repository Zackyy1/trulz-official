import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StaffComponent } from './staff/staff.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StoryComponent } from './story/story.component';
import { MainSectionComponent } from './main-section/main-section.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: MainSectionComponent},
  {path: 'staff', component: StaffComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'story', component: StoryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
