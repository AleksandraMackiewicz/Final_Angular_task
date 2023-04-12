import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './subPages/home-page/home-page.component';
import { LogInComponent } from './subPages/log-in/log-in.component';
import { RegisterComponent } from './subPages/register/register.component';

const routes: Routes = [
  {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'log-in',
        component: LogInComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
