import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-home',
   templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig],
})
export class HomeComponent implements OnInit {

showNavigationArrows = false;
showNavigationIndicators = false;
images = [674,425,1080].map((n) => `https://picsum.photos/id/${n}/900/500`);
public inputValue : string;

  constructor(config: NgbCarouselConfig,) {

    // customize default values of carousels used by this component tree
             this.inputValue = "two way Binding";
             config.showNavigationArrows = true;
             config.showNavigationIndicators = true;
   }

  ngOnInit(): void {
  }

}
