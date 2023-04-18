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
    name: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.compose([Validators.required])),//Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})')
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    isactive: this.builder.control(false)
  })

  proceedregister() {

    const name = this.registerForm.get('name')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;

    this.data = {name: name,
      email: email,
      password: password}
      console.log(this.data)


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
     console.log('invalids')
     this.toastr.warning('Enter the valid data')
     if (this.registerForm.controls['name'].invalid) {
      this.toastr.warning('name field is invalid, handle accordingly')
    }
    if (this.registerForm.controls['password'].invalid) {
      this.toastr.warning('password field is invalid, handle accordingly')
    }
    if (this.registerForm.controls['email'].invalid) {
      this.toastr.warning('email field is invalid, handle accordingly')
    }

    if (this.registerForm.controls['isactive'].invalid) {
      this.toastr.warning('isactive field is invalid, handle accordingly')
    }
   }


  }

  // onSubmit(form: NgForm) {
  //   const name = form.value.name;
  //   const email = form.value.email;
  //   const password = form.value.password;


  //   this.data = {name: name,
  //               email: email,
  //               password: password}

  //   this.handleRefresh(this.data)
  //     console.log(this.data + 'data on submit')
  //   form.reset();
  // }
}
//tostr is breaking whole code
