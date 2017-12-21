import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebformButtonComponent } from './webform-button.component';

describe('WebformButtonComponent', () => {
  let component: WebformButtonComponent;
  let fixture: ComponentFixture<WebformButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebformButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebformButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
