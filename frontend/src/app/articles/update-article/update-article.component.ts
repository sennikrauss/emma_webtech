import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Article, Category, StorageLocation} from "../../shared/tables";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BackendService} from "../../shared/backend.service";

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  @Input() article: Article;
  articles:Article[];
  //damit man im updateFormular dann die Kategorie und Lagerort in einem dropdown auswählen kann
  categories:Category[];
  locations:StorageLocation[];
  @Output() updateEvent = new EventEmitter<Article>();
  form: FormGroup;

  constructor(private fb: FormBuilder, private router:Router,private cs:BackendService) {
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
    this.readCategoryNames();
    this.readLocationNames();

    this.form.patchValue({
      idControl: this.article?.id,
      articleDescriptionControl: this.article?.articleDescription,
      producerNameControl: this.article?.producerName,
      unitControl: this.article?.unit,
      categoryControl:this.article?.category,
      itemsControl:this.article?.items,
      locationControl:this.article?.location,
      purchaseDateControl:this.article?.purchaseDate,
      expirationDateControl:this.article?.expirationDate,
      purchasingPrice_netControl:this.article?.purchasingPrice_net
    });

    console.log('Artikel: ',this.article)
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    const values=this.form.value;
    this.article.id=values.idControl;
    this.article.articleDescription=values.articleDescriptionControl;
    this.article.producerName=values.producerNameControl;
    this.article.unit=values.unitControl;
    this.article.items=values.itemsControl;
    this.article.category=values.categoryControl;
    this.article.location=values.locationControl;
    this.article.purchaseDate=values.purchaseDateControl;
    this.article.expirationDate=values.expirationDateControl;
    this.article.purchasingPrice_net=values.purchasingPrice_netControl;
    console.log(this.article);
    this.updateEvent.emit(this.article);
  }

  cancel(): void {
    this.router.navigateByUrl('/articles');
  }

  readCategoryNames(): void {
    this.cs.getAllCategories().subscribe(
      (response: Category[]) => {
        return this.categories = response;
      },
      error => console.log(error)
    );
  }

  readLocationNames(): void {
    this.cs.getAllLocations().subscribe(
      (response: StorageLocation[]) => {
        return this.locations = response;
      },
      error => console.log(error)
    );
  }

}
