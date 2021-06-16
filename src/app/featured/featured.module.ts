import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DegreesComponent } from './degrees/degrees.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BusinessComponent } from './featured-degrees/business/business.component';
import { CompletionComponent } from './featured-degrees/completion/completion.component';
import { CriminalJusticeComponent } from './featured-degrees/criminal-justice/criminal-justice.component';
import { EducationComponent } from './featured-degrees/education/education.component';

@NgModule({
  declarations: [
    DegreesComponent,
    BusinessComponent,
    CompletionComponent,
    CriminalJusticeComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
    TabsModule.forRoot()
  ],
  exports: [
    DegreesComponent
  ]
})
export class FeaturedModule { }
