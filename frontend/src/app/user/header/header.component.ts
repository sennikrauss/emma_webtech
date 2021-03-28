import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarOpen=false;


  constructor(public auth:AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  logout(): void{
    this.auth.clearStorage();
    this.router.navigate(['']);
    location.reload()
  }

  toggleNavbar(){
    this.navbarOpen=!this.navbarOpen!;
  }
getClass() {
  return "active"
}

}
