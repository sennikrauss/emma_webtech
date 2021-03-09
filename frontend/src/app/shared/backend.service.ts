import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article, ArticleCombi, Category, StorageLocation} from "./tables";

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = 'http://localhost:3000/';
  articleUrl = 'http://localhost:3000/article';
  locationUrl = 'http://localhost:3000/location';
  categoryUrl = 'http://localhost:3000/category';

  constructor(private http: HttpClient) { }

  //get all
  getAllArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(this.articleUrl+'s');
  }

  getAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl+'categories');
  }

  getAllLocations(): Observable<StorageLocation[]>{
    return this.http.get<StorageLocation[]>(this.locationUrl+'s');
  }



  //get by id
  getArticleById(dataId:number):Observable<Article>{
    return this.http.get<Article>(this.articleUrl+'/'+dataId);
  }

  getArticleCombiById(dataId:number):Observable<ArticleCombi>{
    return this.http.get<ArticleCombi>(this.baseUrl+'findCombi/'+dataId);
  }

  getCategoryById(dataId:number):Observable<Category>{
    return this.http.get<Category>(this.categoryUrl+'/'+dataId);
  }

  getLocationById(dataId:number):Observable<StorageLocation>{
    return this.http.get<StorageLocation>(this.locationUrl+'/'+dataId);
  }



  //update by id
  updateArticle(articleId:number,article:Article):void{
    this.http.put<Article>(this.articleUrl +'/'+articleId,article).subscribe(
      response=>{
        console.log(response);
        console.log(response.id);
      },
      error => {
        console.log(error);
      }
    )
  }

  updateCategory(id:number,category:Category):void{
    this.http.put<Category>(this.categoryUrl +'/'+id,category).subscribe(
      response=>{
        console.log(response);
        console.log(response.id);
      },
      error => {
        console.log(error);
      }
    )
  }

  updateLocation(id:number,location:StorageLocation):void{
    this.http.put<StorageLocation>(this.locationUrl +'/'+id,location).subscribe(
      response=>{
        console.log(response);
        console.log(response.id);
      },
      error => {
        console.log(error);
      }
    )
  }



  //delete by id
  deleteOneArticle(articleId:number):void{
    this.http.delete<Article>(this.articleUrl +'/'+articleId).subscribe(response=>{
        console.log(response);
        console.log(response.id);
      }, error => {
        console.log(error);
      }
    );
  }

  deleteOneCategory(id:number):void{
    this.http.delete<Category>(this.categoryUrl +'/'+id).subscribe(response=>{
        console.log(response);
        console.log(response.id);
      }, error => {
        console.log(error);
      }
    );
  }

  deleteOneLocation(id:number):void{
    this.http.delete<StorageLocation>(this.locationUrl +'/'+id).subscribe(response=>{
        console.log(response);
        console.log(response.id);
      }, error => {
        console.log(error);
      }
    );
  }

  //create by id
  createArticle(article: Article): void {
    this.http.post<Article>(this.articleUrl+'/new', article)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }

  createCategory(category: Category): void {
    this.http.post<Category>(this.categoryUrl+'/new', category)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }
  createLocation(location: StorageLocation): void {
    this.http.post<StorageLocation>(this.locationUrl+'/new', location)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
  }

  //filtered articles by category and location id
  //localhost:3000/articles/filteredCategory/:number
  getAllArticlesByCategoryId(id:number):Observable<Article[]>{
    return this.http.get<Article[]>(this.articleUrl +'s/filteredCategory/'+id);
  }

  //localhost:3000/articles/filteredLocation/:number
  getAllArticlesByLocationId(id:number):Observable<Article[]>{
    return this.http.get<Article[]>(this.articleUrl +'s/filteredLocation/'+id);
  }

}
