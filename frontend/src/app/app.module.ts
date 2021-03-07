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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationsComponent,
    CategoriesComponent,
    ArticlesComponent,
    AboutTanteEmmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
