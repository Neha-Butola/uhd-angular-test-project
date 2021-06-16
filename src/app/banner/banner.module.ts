import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestInformationComponent } from './request-information/request-information.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BannerContentComponent } from './banner-content/banner-content.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    RequestInformationComponent,
    BannerContentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    BannerContentComponent
  ]
})
export class BannerModule { }
