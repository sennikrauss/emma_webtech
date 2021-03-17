import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {StorageLocation} from "../../../shared/tables";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.css']
})
export class UpdateLocationComponent implements OnInit {

  @Input() storageLocation: StorageLocation;
  @Output() updateEvent = new EventEmitter<StorageLocation>();
  formLocation: FormGroup;

  constructor(private fb: FormBuilder, private router:Router,) {
    this.formLocation = this.fb.group(
      {
        locationIdControl: ['', Validators.required],
        locationControl: ['', Validators.required],
        descriptionControl: ['', Validators.required],
        urlControl: ['', Validators.required]
      }
    );
  }
  ngOnInit(): void {
    this.formLocation.patchValue({
      locationIdControl: this.storageLocation?.id,
      locationControl: this.storageLocation?.location,
      descriptionControl: this.storageLocation?.description,
      urlControl: this.storageLocation?.picUrl
    });
  }

  onSubmit(): void {
    // TODO: Use EventEmitter with form value
    const values=this.formLocation.value;
    this.storageLocation.id=values.locationIdControl;
    this.storageLocation.location=values.locationControl;
    this.storageLocation.description=values.descriptionControl;
    this.storageLocation.picUrl=values.urlControl;
    this.updateEvent.emit(this.storageLocation);
  }

  cancel(): void {
    this.router.navigateByUrl('/user/locations');
  }

}
