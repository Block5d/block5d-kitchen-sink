import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebformDatePickerComponent } from './webform-date-picker.component';

describe('WebformDatePickerComponent', () => {
  let component: WebformDatePickerComponent;
  let fixture: ComponentFixture<WebformDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebformDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebformDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
