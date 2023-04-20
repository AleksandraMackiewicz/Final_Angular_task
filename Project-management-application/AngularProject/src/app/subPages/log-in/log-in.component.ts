import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { AuthComponent } from 'src/app/APIs/auth/auth.component';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from 'ngx-toastr'
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  email = "johndoe@gmail.com";
  password = "passwords"
  builder: FormBuilder = new FormBuilder;
  userdata: any
constructor( httpClient: HttpClient, builder: FormBuilder, private service: AuthComponent, private router: Router, private toastr: ToastrService ){
}
loginform = this.builder.group({
  login: this.builder.control('', Validators.required),
  password: this.builder.control('', Validators.required)

})

proceedlogin() {
console.log(`loginform password ${this.loginform.value.login} and logindform password ${this.loginform.value.password}`)

let inputdata: { login: any, password: any } = {
  login: this.loginform.value.login,
  password:this.loginform.value.password
}




if (this.loginform.valid) {
  this.service.SignIn(inputdata).subscribe(res=>{
    console.log('corret password')
    //this.router.navigate(['']);
       //        sessionStorage.setItem('login', this.userdata.id)?

  },
  err => { this.toastr.error('invalid credentials')
})
}
}}

