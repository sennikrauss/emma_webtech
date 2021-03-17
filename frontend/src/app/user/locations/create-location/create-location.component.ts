import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StorageLocation} from "../../../shared/tables";
import {BackendService} from "../../../shared/backend.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent implements OnInit {

  formLocation: FormGroup;
  location:StorageLocation;

  constructor(
    private cs: BackendService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formLocation = this.fb.group(
      {
        locationControl: ['', Validators.required],
        descriptionControl: ['', Validators.required],
        urlControl: ['', Validators.required],
      }
    );
    this.location = { id: 0, location: '', description: '', picUrl: ''};
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn(this.formLocation.value);
    const values = this.formLocation.value;
    this.location.location = values.locationControl;
    this.location.description = values.descriptionControl;
    this.location.picUrl = values.urlControl;

    console.log(this.location);
    this.cs.createLocation(this.location);
    this.router.navigate(['/user/locations']);
  }

  cancel(): void {
    this.router.navigate(['/user/locations']);
  }

}
