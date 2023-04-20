import { Component, Inject, Injectable } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { AuthComponent } from 'src/app/APIs/auth/auth.component';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from 'ngx-toastr'
import { Route, Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class RegisterComponent extends AuthComponent {
  userdata: any;
  data: any;
  builder: FormBuilder = new FormBuilder;
  constructor(private toastr: ToastrService, httpClient: HttpClient, builder: FormBuilder, private service: AuthComponent,
     private router: Router)
  {
    super(httpClient)

   // this.toastr.warning('xxsxsxsxs the valid') START TEST
  }

  registerForm = this.builder.group({
   // id: this.builder.control('',Validators.compose([Validators.required, Validators.minLength(5)])), // ID SHOULD BE ADDED AUTOMATICLY
    name: this.builder.control('',Validators.compose([Validators.required, Validators.minLength(4)])),
    login: this.builder.control('',Validators.compose([Validators.required, Validators.minLength(4)])),
    password: this.builder.control('', Validators.compose([Validators.required])),//Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')

  })

  proceedregister() {

    const login = this.registerForm.get('login')?.value;
    const name = this.registerForm.get('name')?.value;
    const password = this.registerForm.get('password')?.value;

    this.data = {
      login: login,
      name: name,
      password: password}
      console.log(this.data)

      console.log(this.registerForm.value)
  if (this.registerForm.valid) {
    this.service.ProceedRegister(this.registerForm.value).subscribe(res => {
     this.toastr.success('Please contact admin for enable access','Registered Successfully')
     console.log(this.data+ 'on proceed')

       this.router.navigate(['log-in'])
      console.log('valid')



      //MY CODE







    }

    )}
   else {

     if (this.registerForm.controls['login'].invalid) {
      this.toastr.warning('login field is invalid, handle accordingly')
    }
    if (this.registerForm.controls['password'].invalid) {
      this.toastr.warning('password field is invalid, handle accordingly')
    }
    if (this.registerForm.controls['name'].invalid) {
      this.toastr.warning('name field is invalid, handle accordingly')
    }


   }


  }

  // onSubmit(form: NgForm) {
  //   const login = form.value.login;
  //   const name = form.value.name;
  //   const password = form.value.password;


  //   this.data = {login: login,
  //               name: name,
  //               password: password}

  //   this.handleRefresh(this.data)
  //     console.log(this.data + 'data on submit')
  //   form.reset();
  // }
}
//tostr is breaking whole code
