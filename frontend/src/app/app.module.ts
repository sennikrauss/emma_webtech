import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LocationsComponent } from './locations/locations.component';
import { CategoriesComponent } from './categories/categories.component';
import { ArticlesComponent } from './articles/articles.component';
import { AboutTanteEmmaComponent } from './about-tante-emma/about-tante-emma.component';
import{  CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { pencilSquare,trash } from 'ngx-bootstrap-icons';
import { UpdateArticleComponent } from './articles/update-article/update-article.component';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { UpdateLocationComponent } from './locations/update-location/update-location.component';
import { CreateLocationComponent } from './locations/create-location/create-location.component';
import { UpdateCategoryComponent } from './categories/update-category/update-category.component';
import { CreateCategoryComponent } from './categories/create-category/create-category.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const icons = {
  pencilSquare,
  trash
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
    RegisterComponent
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
