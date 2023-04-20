import { Component, Inject } from '@angular/core';
import { GetDataComponent } from '../get-data/get-data.component';
import { HttpClient } from '@angular/common/http';
import { compileDeclareClassMetadata } from '@angular/compiler';

import { catchError, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent extends GetDataComponent {
  private sub = 'auth/signup';
  apiurl: any;
  constructor(httpClient: HttpClient){
    super(httpClient);
    this.apiurl='http://localhost:3000/' //???


  }




  FindUser(code: any): Observable<string>{
    console.log(code)
    return this.httpClient.get<any[]>(this.apiurl+'users').pipe(
      map(users => users.find(user => user.login === code)),
      map(user => user?._id)
    );
  }
  GetAll(){
    return this.httpClient.get(this.apiurl+'users');
  }

  SignIn(inputdata: { login: string, password: string }) {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify(inputdata);
    return this.httpClient.post(this.apiurl + 'auth/signin', body, httpOptions);
  }

  GetByCode(code: any){
//GET /:userId not login...
    return this.httpClient.get(this.apiurl + 'users/'+code);

  }
  ProceedRegister(inputdata: any){
    return this.httpClient.post(this.apiurl+'auth/signup', inputdata)
  }
  UpdateUser(code: any, inputdata: any){
    return this.httpClient.put(this.apiurl+'/'+code,inputdata)
  }

  // ngOnInit(): void {
  //   // this.getData('boards')
  //   // console.log(this.list)

  // }
  handleRefresh( data:any): void {
    this.postData(this.sub, data, this.handleRefresh.bind(this))
    console.log(this.list)

  }
}
