import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebformComponent } from './webform.component';

describe('WebformComponent', () => {
  let component: WebformComponent;
  let fixture: ComponentFixture<WebformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
