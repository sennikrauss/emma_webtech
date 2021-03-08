import { Component, OnInit } from '@angular/core';
import {Category} from "../shared/tables";
import {ActivatedRoute, Router} from "@angular/router";
import {BackendService} from "../shared/backend.service";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories:Category[];
  category:Category;
  selectedCategoryId:number;
  error: HttpErrorResponse;
  closeResult='';
  form=FormGroup;

  constructor(
    private cs:BackendService,
    private route:ActivatedRoute,
    private router:Router,config: NgbModalConfig,
    private modalService: NgbModal,
    private fb:FormBuilder,
  ) {
    // Konfiguration des modalen Dialogs
    config.backdrop = 'static';   // schliesst nicht, wenn man in das Fenster dahinter klickt
    config.keyboard = false;      // Modaler Dialog kann nicht durch ESC beendet werden
    // Formular fuer delete
    // @ts-ignore
    this.form = this.fb.group(
      {
        categoryIdControl: ['', Validators.required],
        categoryControl: ['', Validators.required],
        descriptionControl:['',Validators.required],
        urlControl: ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {
    this.selectedCategoryId=Number(this.route.snapshot.paramMap.get('idCategory'));
    if (this.selectedCategoryId === 0) { //localhost:4200/category
      this.readAll();
      console.log('selectedCategoryId: '+this.selectedCategoryId)
    } else if(this.selectedCategoryId>0) {
      console.log('category = ' + this.selectedCategoryId);
      this.readOne(this.selectedCategoryId);
    }
  }

  trackByData(index: number, category: Category): number {
    return category.id;
  }

  readAll(): void {
    this.cs.getAllCategories().subscribe(
      (response: Category[]) => {
        console.log(response);
        return this.categories = response;
      },
      error => console.log(error)
    );
  }

  readOne(id: number) : void{
    this.cs.getCategoryById(id).subscribe(
      (response: Category)=>this.category=response,
      error=>this.error=error,
    );
  }

  update(category:Category):void{
    this.category=category;
    this.cs.updateCategory(this.category.id,this.category);
    this.router.navigateByUrl('/categories');
  }

  deleteOne(id: number): void {
    this.cs.deleteOneCategory(id);
    window.location.reload();
  }


  //for delete form
  open(content, id:number): void {
    this.readOne(id);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult);
      if (result === 'delete')
      {
        this.deleteOne(this.category?.id);
      }
    });
  }
}
