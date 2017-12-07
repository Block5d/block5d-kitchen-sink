import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupV2Component } from './user-group-v2.component';

describe('UserGroupV2Component', () => {
  let component: UserGroupV2Component;
  let fixture: ComponentFixture<UserGroupV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGroupV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
