import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebformContentComponent } from './webform-content.component';

describe('WebformContentComponent', () => {
  let component: WebformContentComponent;
  let fixture: ComponentFixture<WebformContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebformContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebformContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
