import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessDegreeComponent } from './business-degree/business-degree.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: '', component:  HomePageComponent }, 
  {path: 'business', component:  BusinessDegreeComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
