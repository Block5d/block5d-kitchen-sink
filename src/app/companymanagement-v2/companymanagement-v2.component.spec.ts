import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanymanagementV2Component } from './companymanagement-v2.component';

describe('CompanymanagementV2Component', () => {
  let component: CompanymanagementV2Component;
  let fixture: ComponentFixture<CompanymanagementV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanymanagementV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanymanagementV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
