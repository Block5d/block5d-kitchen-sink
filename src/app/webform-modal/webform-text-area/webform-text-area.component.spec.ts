import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebformTextAreaComponent } from './webform-text-area.component';

describe('WebformTextAreaComponent', () => {
  let component: WebformTextAreaComponent;
  let fixture: ComponentFixture<WebformTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebformTextAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebformTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
