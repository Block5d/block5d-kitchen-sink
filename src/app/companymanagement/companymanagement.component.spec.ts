import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanymanagementComponent } from './companymanagement.component';

describe('CompanymanagementComponent', () => {
  let component: CompanymanagementComponent;
  let fixture: ComponentFixture<CompanymanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanymanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanymanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
