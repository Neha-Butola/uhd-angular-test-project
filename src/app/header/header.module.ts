import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DropdownDirective } from './dropdown.directive';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { HeaderComponent } from './components/header/header.component';
import { PhoneNumberPipe } from './phone-number.pipe';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    NavigationComponent,
    DropdownDirective,
    TopHeaderComponent,
    HeaderComponent,
    PhoneNumberPipe
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
