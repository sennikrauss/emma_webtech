import { Component, OnInit } from '@angular/core';
import {StorageLocation} from "../../shared/tables";
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BackendService} from "../../shared/backend.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations:StorageLocation[];
  location:StorageLocation;
  selectedIdLocation:number;
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
    // Konfiguration des modalen Dialogs
    config.backdrop = 'static';   // schliesst nicht, wenn man in das Fenster dahinter klickt
    config.keyboard = false;      // Modaler Dialog kann nicht durch ESC beendet werden
    // Formular fuer delete
    // @ts-ignore
    this.form = this.fb.group(
      {
        locationIdControl: ['', Validators.required],
        locationControl: ['', Validators.required],
        descriptionControl: ['',Validators.required],
        urlControl: ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {
    this.selectedIdLocation=Number(this.route.snapshot.paramMap.get('idLocation'))
    if (this.selectedIdLocation === 0) {
      this.readAll();
    } else if(this.selectedIdLocation>0){
      this.readOne(this.selectedIdLocation);
    }
  }

  trackByData(index: number, location: StorageLocation): number {
    return location.id;
  }

  readAll(): void {
    this.cs.getAllLocations().subscribe(
      (response: StorageLocation[]) => {
        console.log(response);
        return this.locations = response;
      },
      error => console.log(error)
    );
  }

  readOne(id:number) : void{
    this.cs.getLocationById(id).subscribe(
      (response: StorageLocation)=>this.location=response,
      error=>this.error=error,
    );
  }

  update(location:StorageLocation):void{
    this.location=location;
    this.cs.updateLocation(this.location.id,this.location);
    //zurück zur Location-Hauptseite springen
    this.router.navigateByUrl('/user/locations');
  }

  deleteOne(id:number): void {
    this.cs.deleteOneLocation(id);
    //Seite neu laden
    window.location.reload();
  }


  open(content, id:number): void {
    this.readOne(id);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult);
      if (result === 'delete')
      {
        this.deleteOne(this.location?.id);
      }
    });
  }

}
