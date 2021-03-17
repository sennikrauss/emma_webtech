import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './user/home/home.component';
import { LocationsComponent } from './user/locations/locations.component';
import { CategoriesComponent } from './user/categories/categories.component';
import { ArticlesComponent } from './user/articles/articles.component';
import { AboutTanteEmmaComponent } from './user/about-tante-emma/about-tante-emma.component';
import{  CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { pencilSquare,trash,key } from 'ngx-bootstrap-icons';
import { UpdateArticleComponent } from './user/articles/update-article/update-article.component';
import { CreateArticleComponent } from './user/articles/create-article/create-article.component';
import { UpdateLocationComponent } from './user/locations/update-location/update-location.component';
import { CreateLocationComponent } from './user/locations/create-location/create-location.component';
import { UpdateCategoryComponent } from './user/categories/update-category/update-category.component';
import { CreateCategoryComponent } from './user/categories/create-category/create-category.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './user/header/header.component';

const icons = {
  pencilSquare,
  trash,
  key
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationsComponent,
    CategoriesComponent,
    ArticlesComponent,
    AboutTanteEmmaComponent,
    UpdateArticleComponent,
    CreateArticleComponent,
    UpdateLocationComponent,
    CreateLocationComponent,
    UpdateCategoryComponent,
    CreateCategoryComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
