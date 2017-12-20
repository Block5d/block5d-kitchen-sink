import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebformSelectComponent } from './webform-select.component';

describe('WebformSelectComponent', () => {
  let component: WebformSelectComponent;
  let fixture: ComponentFixture<WebformSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebformSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebformSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
