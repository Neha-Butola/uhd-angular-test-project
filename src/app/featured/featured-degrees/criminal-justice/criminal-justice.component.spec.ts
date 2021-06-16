import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalJusticeComponent } from './criminal-justice.component';

describe('CriminalJusticeComponent', () => {
  let component: CriminalJusticeComponent;
  let fixture: ComponentFixture<CriminalJusticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriminalJusticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalJusticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
