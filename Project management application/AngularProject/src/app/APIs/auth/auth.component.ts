import { Component } from '@angular/core';
import { GetDataComponent } from '../get-data/get-data.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent extends GetDataComponent {
  private sub = 'auth/signup';
  constructor(httpClient: HttpClient){
    super(httpClient)



  }
  ngOnInit(): void {
    // this.getData('boards')
    // console.log(this.list)

  }
  handleRefresh( data:any): void {
    this.postData(this.sub, data, this.handleRefresh.bind(this))
    console.log(this.list)

  }
}
