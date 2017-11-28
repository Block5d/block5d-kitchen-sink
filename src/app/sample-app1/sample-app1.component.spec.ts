import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleApp1Component } from './sample-app1.component';

describe('SampleApp1Component', () => {
  let component: SampleApp1Component;
  let fixture: ComponentFixture<SampleApp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleApp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleApp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
