import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDegreeComponent } from './business-degree.component';

describe('BusinessDegreeComponent', () => {
  let component: BusinessDegreeComponent;
  let fixture: ComponentFixture<BusinessDegreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessDegreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessDegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
