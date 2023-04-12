import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GetDataComponent } from '../get-data/get-data.component';
@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent extends GetDataComponent{

  constructor(httpClient: HttpClient){
    super(httpClient)
  }
  ngOnInit(): void {
    // this.getData('boards')
    // console.log(this.list)

  }
  // handleRefresh(myData: any): void {
  //   this.postData('boards', this.handleRefresh.bind(this))
  //   console.log(this.list)

  // }
}
