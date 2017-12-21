import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebformPasswordComponent } from './webform-password.component';

describe('WebformPasswordComponent', () => {
  let component: WebformPasswordComponent;
  let fixture: ComponentFixture<WebformPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebformPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebformPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
