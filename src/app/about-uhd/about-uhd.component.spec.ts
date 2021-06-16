import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUhdComponent } from './about-uhd.component';

describe('AboutUhdComponent', () => {
  let component: AboutUhdComponent;
  let fixture: ComponentFixture<AboutUhdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUhdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUhdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
