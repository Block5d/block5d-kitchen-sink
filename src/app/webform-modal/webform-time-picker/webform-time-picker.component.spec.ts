import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebformTimePickerComponent } from './webform-time-picker.component';

describe('WebformTimePickerComponent', () => {
  let component: WebformTimePickerComponent;
  let fixture: ComponentFixture<WebformTimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebformTimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebformTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
