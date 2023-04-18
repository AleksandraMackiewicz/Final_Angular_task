import { Component, Inject } from '@angular/core';
import { GetDataComponent } from '../get-data/get-data.component';
import { HttpClient } from '@angular/common/http';
import { compileDeclareClassMetadata } from '@angular/compiler';

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
    this.apiurl='http://localhost:3000' //???


  }
  GetAll(){
    return this.httpClient.get(this.apiurl);
  }
  GetByCode(code: any){
    return this.httpClient.get(this.apiurl + '/'+code);
  }
  ProceedRegister(inputdata: any){
    return this.httpClient.post(this.apiurl, inputdata)
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
