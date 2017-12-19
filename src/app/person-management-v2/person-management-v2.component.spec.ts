import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonManagementV2Component } from './person-management-v2.component';

describe('PersonManagementV2Component', () => {
  let component: PersonManagementV2Component;
  let fixture: ComponentFixture<PersonManagementV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonManagementV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonManagementV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
