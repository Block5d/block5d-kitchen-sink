import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleApp4Component } from './sample-app4.component';

describe('SampleApp4Component', () => {
  let component: SampleApp4Component;
  let fixture: ComponentFixture<SampleApp4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleApp4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleApp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
