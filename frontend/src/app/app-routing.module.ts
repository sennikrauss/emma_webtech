import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutTanteEmmaComponent } from './about-tante-emma/about-tante-emma.component';
import { ArticlesComponent } from './articles/articles.component';

const routes: Routes = [
{path: 'locations', component:  LocationsComponent },
{path: 'home', component:  HomeComponent },
{path: 'categories', component: CategoriesComponent },
{path: 'articles', component: ArticlesComponent },
{path: 'about-tante-emma', component: AboutTanteEmmaComponent },

// otherwise redirect to home
{ path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
