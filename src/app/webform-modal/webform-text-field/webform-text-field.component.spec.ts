import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebformTextFieldComponent } from './webform-text-field.component';

describe('WebformTextFieldComponent', () => {
  let component: WebformTextFieldComponent;
  let fixture: ComponentFixture<WebformTextFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebformTextFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebformTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
