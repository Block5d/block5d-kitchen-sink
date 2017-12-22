import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebformCheckBoxComponent } from './webform-check-box.component';

describe('WebformCheckBoxComponent', () => {
  let component: WebformCheckBoxComponent;
  let fixture: ComponentFixture<WebformCheckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebformCheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebformCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
