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

  //path to readOne (Formulary: delete, update
{path: 'category/:idCategory', component: CategoriesComponent },
{path: 'location/:idLocation', component: LocationsComponent },
{path: 'article/:idArticle', component: ArticlesComponent },

  //path to createOne (Formulary: create
{path: 'article/new', component: ArticlesComponent },
{path: 'category/new', component: CategoriesComponent },
{path: 'location/new', component: LocationsComponent },

  //path to filtered article-table by only one category or location
{path: 'articles/filteredCategory/:idCategory', component: ArticlesComponent },
{path: 'articles/filteredLocation/:idLocation', component: ArticlesComponent },

// otherwise redirect to home
{ path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
