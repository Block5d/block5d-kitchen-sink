import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sampleapp2Component } from './sampleapp2.component';

describe('Sampleapp2Component', () => {
  let component: Sampleapp2Component;
  let fixture: ComponentFixture<Sampleapp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sampleapp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sampleapp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
