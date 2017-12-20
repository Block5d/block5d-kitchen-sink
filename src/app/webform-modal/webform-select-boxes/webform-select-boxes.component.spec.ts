import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebformSelectBoxesComponent } from './webform-select-boxes.component';

describe('WebformSelectBoxesComponent', () => {
  let component: WebformSelectBoxesComponent;
  let fixture: ComponentFixture<WebformSelectBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebformSelectBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebformSelectBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
