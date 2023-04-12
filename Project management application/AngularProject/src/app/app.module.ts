import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { LogInComponent } from './subPages/log-in/log-in.component';
import { HomePageComponent } from './subPages/home-page/home-page.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RegisterComponent } from './subPages/register/register.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './APIs/auth/auth.component';
import { GetDataComponent } from './APIs/get-data/get-data.component';
import { BoardsComponent } from './APIs/boards/boards.component'

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LogInComponent,
    HomePageComponent,
    RegisterComponent,
    AuthComponent,
    GetDataComponent,
    BoardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
    // RouterModule.forRoot([
    //   {
    //     path: '',
    //     component: HomePageComponent,
    //   },
    //   {
    //     path: 'log-in',
    //     component: LogInComponent
    //   },
    //   {
    //     path: 'register',
    //     component: RegisterComponent
    //   }
    // ])
  ]
  ,
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
