import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
{path: 'locations', component:  LocationsComponent },
{path: 'home', component:  HomeComponent },
{path: 'categories', component: CategoriesComponent },

// otherwise redirect to home
{ path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
