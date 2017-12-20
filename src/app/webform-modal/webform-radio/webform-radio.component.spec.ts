import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebformRadioComponent } from './webform-radio.component';

describe('WebformRadioComponent', () => {
  let component: WebformRadioComponent;
  let fixture: ComponentFixture<WebformRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebformRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebformRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
