import { Component, OnInit } from '@angular/core';
import {Article} from "../shared/tables";
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BackendService} from "../shared/backend.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles:Article[];
  article:Article;
  selectedArticleId; selectedCategoryId;selectedLocationId:number;
  error: HttpErrorResponse;
  closeResult='';
  form=FormGroup;

  constructor(
    private cs:BackendService,
    private route:ActivatedRoute,
    private router:Router,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private fb:FormBuilder,
  ) {
    // Configuration modal Dialog
    config.backdrop = 'static';   // schliesst nicht, wenn man in das Fenster dahinter klickt
    config.keyboard = false;      // Modaler Dialog kann nicht durch ESC beendet werden
    // Form for delete
    // @ts-ignore
    this.form = this.fb.group(
      {
        idControl: ['', Validators.required],
        articleDescriptionControl: ['', Validators.required],
        producerNameControl: ['', Validators.required],
        unitControl: ['', Validators.required],
        categoryControl: ['', Validators.required],
        itemsControl: ['', Validators.required],
        locationControl: ['', Validators.required],
        purchaseDateControl: ['', Validators.required],
        expirationDateControl: ['', Validators.required],
        purchasingPrice_netControl: ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {
    this.selectedArticleId = Number(this.route.snapshot.paramMap.get('idArticle'));
    console.log('selectedArticleId: '+this.selectedArticleId)
    if (this.selectedArticleId === 0) {
      this.readAll();
    } else {
      this.readOne(this.selectedArticleId);
    }

    //wenn Klick auf Kategorienkarte, dann Link zur Sortimentstabelle, dann Kategorie-id>0, dann Filter anwenden
    this.selectedCategoryId = Number(this.route.snapshot.paramMap.get('idCategory'));
    console.log('selectedCategoryId: '+this.selectedCategoryId)

    if(this.selectedCategoryId!=0){
      this.readAllArticlesByCategory(this.selectedCategoryId);
    }

    //wenn Klick auf Lagerortkarte, dann Link zur Sortimentstabelle, dann Lagerort-id>0, dann Filter anwenden
    this.selectedLocationId=Number(this.route.snapshot.paramMap.get('idLocation'));
    console.log('selectedLocationId: '+this.selectedLocationId)

    if(this.selectedLocationId!=0){
      this.readAllLocationsByCategory(this.selectedLocationId);
    }
  }

  trackByData(index: number, article: Article): number {
    return article.id;
  }

  readAll(): void {
    this.cs.getAllArticles().subscribe(
      (response: Article[]) => {
        console.log(response);
        return this.articles = response;
      },
      error => console.log(error)
    );
  }
  readOne(id: number) : void{
    this.cs.getArticleById(id).subscribe(
      (response: Article)=>this.article=response,
      error=>this.error=error,
    );
  }

  readAllArticlesByCategory(id:number): void {
    this.cs.getAllArticlesByCategoryId(id).subscribe(
      (response: Article[]) => {
        console.log('Test:',response);
        return this.articles = response;
      },
      error => console.log(error)
    );
  }

  readAllLocationsByCategory(id:number): void {
    this.cs.getAllArticlesByLocationId(id).subscribe(
      (response: Article[]) => {
        console.log(response);
        return this.articles = response;
      },
      error => console.log(error)
    );
  }

  update(article:Article):void{
    this.article=article;
    this.cs.updateArticle(this.article.id,this.article);
    this.router.navigateByUrl('/categories');
  }

  deleteOne(id: number): void {
    this.cs.deleteOneArticle(id);
    window.location.reload();
  }

  open(content, id: number): void {
    this.readOne(id);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult);
      if (result === 'delete')
      {
        this.deleteOne(this.article?.id);
      }
    });
  }

}
