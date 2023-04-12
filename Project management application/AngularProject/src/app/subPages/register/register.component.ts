import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { AuthComponent } from 'src/app/APIs/auth/auth.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends AuthComponent {

  constructor(httpClient: HttpClient){
    super(httpClient)
  }

  onSubmit(form: NgForm) {
    const name = form.value.name;
    const login = form.value.login;
    const password = form.value.password;

    let data = {name: name,
                login: login,
                password: password}

    this.handleRefresh(data)

    form.reset();
  }
}
