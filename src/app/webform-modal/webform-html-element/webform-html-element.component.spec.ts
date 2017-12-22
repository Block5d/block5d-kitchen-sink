import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebformHtmlElementComponent } from './webform-html-element.component';

describe('WebformHtmlElementComponent', () => {
  let component: WebformHtmlElementComponent;
  let fixture: ComponentFixture<WebformHtmlElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebformHtmlElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebformHtmlElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
