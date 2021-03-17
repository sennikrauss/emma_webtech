import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Article, Category, StorageLocation} from "../../../shared/tables";
import {BackendService} from "../../../shared/backend.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  form: FormGroup;
  article: Article;
  articles:Article[];
  //für die dropdown-list
  categories:Category[];
  locations:StorageLocation[];
  model: NgbDateStruct;

  constructor(
    private cs: BackendService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.form = this.fb.group(
      {
        articleDescriptionControl: ['', Validators.required],
        producerNameControl: ['', Validators.required],
        unitControl: ['', Validators.required],
        itemsControl: ['', Validators.required],
        categoryControl: ['', Validators.required],
        locationControl: ['', Validators.required],
        purchaseDateControl: ['', Validators.required],
        expirationDateControl: ['', Validators.required],
        purchasingPrice_netControl: ['', Validators.required],
      }
    );
    this.article = {
      id: 0, articleDescription: '', producerName: '', unit: '', items: 0, category: 0,
      location: 0, purchaseDate: '', expirationDate: '', purchasingPrice_net: 0
    };
  }


  ngOnInit(): void {
    this.readAllCategories();
    this.readAllLocations();

  }

  onSubmit(): void {
    console.warn('Warnung: '+this.form.value);
    const values = this.form.value;
    this.article.articleDescription = values.articleDescriptionControl;
    this.article.producerName = values.producerNameControl;
    this.article.unit = values.unitControl;
    this.article.items = values.itemsControl;
    this.article.category = values.categoryControl;
    this.article.location = values.locationControl;
    this.article.purchaseDate = values.purchaseDateControl;
    this.article.expirationDate = values.expirationDateControl;
    this.article.purchasingPrice_net = values.purchasingPrice_netControl;


    console.log(this.article);
    this.cs.createArticle(this.article);

    //nachdem Artikel erstellt wurde, wohin navigieren?
    this.router.navigate(['/articles']);
  }

  cancel(): void {
    //nachdem auf Cancel geklickt wurde, wohin navigieren?
    this.router.navigate(['/articles']);
  }

  readAllCategories(): void {
    this.cs.getAllCategories().subscribe(
      (response: Category[]) => {
        console.log(response);
        return this.categories = response;
      },
      error => console.log(error)
    );
  }

  readAllLocations(): void {
    this.cs.getAllLocations().subscribe(
      (response: StorageLocation[]) => {
        console.log(response);
        return this.locations = response;
      },
      error => console.log(error)
    );
  }

}
