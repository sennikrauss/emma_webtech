import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { LocationsComponent } from './user/locations/locations.component';
import { CategoriesComponent } from './user/categories/categories.component';
import { AboutTanteEmmaComponent } from './user/about-tante-emma/about-tante-emma.component';
import { ArticlesComponent } from './user/articles/articles.component';
import {CreateArticleComponent} from "./user/articles/create-article/create-article.component";
import {CreateCategoryComponent} from "./user/categories/create-category/create-category.component";
import {CreateLocationComponent} from "./user/locations/create-location/create-location.component";
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserComponent} from "./user/user.component";

const routes: Routes = [
  {path: 'user',component: UserComponent, children: [
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
      {path: 'createArticle', component: CreateArticleComponent },
      {path: 'createCategory', component: CreateCategoryComponent },
      {path: 'createLocation', component: CreateLocationComponent },

      //path to filtered article-table by only one category or location
      {path: 'articles/filteredCategory/:idCategory', component: ArticlesComponent },
      {path: 'articles/filteredLocation/:idLocation', component: ArticlesComponent },
    ]},

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},



// otherwise redirect to home
{ path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
