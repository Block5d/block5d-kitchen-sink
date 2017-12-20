import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebformNumberComponent } from './webform-number.component';

describe('WebformNumberComponent', () => {
  let component: WebformNumberComponent;
  let fixture: ComponentFixture<WebformNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebformNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebformNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
