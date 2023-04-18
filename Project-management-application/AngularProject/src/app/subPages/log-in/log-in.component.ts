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
constructor( httpClient: HttpClient, builder: FormBuilder, private service: AuthComponent, private router: Router, /*private toastr: ToastrService */){

}
loginform = this.builder.group({
  username: this.builder.control('', Validators.required),
  password: this.builder.control('', Validators.required)

})

proceedlogin() {
  //if (this.loginform.valid) {
    //this.service.ProceedRegister(this.loginform.value).subscribe(res => {
     // this.toastr.success('Please contact admin for enable access','Registered Successfully')
      //this.router.navigate(['log-in'])
   // }
    //)
   //else {
    //this.toastr.warning('Enter the valid')
  //}
  this.service.GetByCode(this.loginform.value.username).subscribe(res=>{
    this.userdata=res;
    console.log(this.userdata);

  })
}
}
