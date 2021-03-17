import { Component, OnInit } from '@angular/core';
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isLogin: boolean

  constructor(private login: LoginComponent) { }

  ngOnInit(): void {
    this.isLogin= this.login.isLogin
  }

}
