import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Category} from "../../shared/tables";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  @Input() category: Category;
  @Output() updateEvent = new EventEmitter<Category>();
  formCategory: FormGroup;

  constructor(private fb: FormBuilder, private router:Router,) {
    this.formCategory = this.fb.group(
      {
        categoryIdControl: ['', Validators.required],
        categoryControl: ['', Validators.required],
        descriptionControl: ['', Validators.required],
        urlControl: ['', Validators.required]
      }
    );
  }
  ngOnInit(): void {
    this.formCategory.patchValue({
      categoryIdControl: this.category?.id,
      categoryControl: this.category?.category,
      descriptionControl: this.category?.description,
      urlControl: this.category?.picUrl
    });
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    const values=this.formCategory.value;
    this.category.id=values.categoryIdControl;
    this.category.category=values.categoryControl;
    this.category.description=values.descriptionControl;
    this.category.picUrl=values.urlControl;
    this.updateEvent.emit(this.category);
  }

  cancel(): void {
    this.router.navigateByUrl('/categories');
  }

}
