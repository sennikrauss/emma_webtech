import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLogin = false;
  errorMessage;
  registerForm: FormGroup;
  submitted = false;

  constructor(     private formBuilder: FormBuilder,
                   private api: ApiService,
                   private auth: AuthService,
                   private router: Router
            ) { }

 // convenience getter for easy access to form fields
   get f(): any { return this.registerForm.controls; }

   ngOnInit(): void {
     this.registerForm = this.formBuilder.group({
       username: ['', [Validators.required,Validators.minLength(6)]],
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required,Validators.minLength(6)]]
     });
     this.isUserLogin();
   }

   onSubmit(): void {
     console.log('Your form data : ', this.registerForm.value);
     this.api.postTypeRequest('user/register', this.registerForm.value).subscribe((res: any) => {
       if (res.status) {
         console.log(res);
         this.auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
         this.auth.setDataInLocalStorage('token', res.token);
         this.router.navigate(['user/home']);
       } else {
         console.log(res);
         alert(res.msg);
         console.log('error')
       }
     }, err => {
       this.errorMessage = err.error.message;
     });
   }

   isUserLogin(): void{
     if (this.auth.getUserDetails() != null){
       this.isLogin = true;
     }
   }

}
