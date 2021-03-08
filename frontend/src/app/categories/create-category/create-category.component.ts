import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../shared/tables";
import {BackendService} from "../../shared/backend.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  formCategory: FormGroup;
  category: Category;

  constructor(
    private cs: BackendService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formCategory = this.fb.group(
      {
        categoryControl: ['', Validators.required],
        descriptionControl: ['', Validators.required],
        urlControl: ['', Validators.required],
      }
    );
    this.category = { id: 0, category: '', description: '', picUrl: ''};
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn(this.formCategory.value);
    const values = this.formCategory.value;
    this.category.category = values.categoryControl;
    this.category.description = values.descriptionControl;
    this.category.picUrl = values.urlControl;

    console.log(this.category);
    this.cs.createCategory(this.category);
    this.router.navigate(['/categories']);
  }

  cancel(): void {
    this.router.navigate(['/categories']);
  }
}
