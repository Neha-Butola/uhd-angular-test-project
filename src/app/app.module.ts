import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerModule } from './banner/banner.module';
import { FeaturedModule } from './featured/featured.module';
import { HeaderModule } from './header/header.module';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BusinessDegreeComponent } from './business-degree/business-degree.component';
import { AboutUhdComponent } from './about-uhd/about-uhd.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomePageComponent,
    BusinessDegreeComponent,
    AboutUhdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BannerModule,
    HeaderModule,
    FeaturedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
