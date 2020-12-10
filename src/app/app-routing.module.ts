import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch:'full' },
  { path: 'courses', component: HomeComponent },
  { path: 'projects', component: HomeComponent },
  { path: 'contact', component: HomeComponent },
  { path: 'about', component: HomeComponent },
  { path: 'blog', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
