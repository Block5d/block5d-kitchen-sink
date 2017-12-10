import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgChartV2Component } from './org-chart-v2.component';

describe('OrgChartV2Component', () => {
  let component: OrgChartV2Component;
  let fixture: ComponentFixture<OrgChartV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgChartV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgChartV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
