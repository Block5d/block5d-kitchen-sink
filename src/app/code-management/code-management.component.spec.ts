import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeManagementV3Component } from './code-management.component';

describe('CodeManagementV3Component', () => {
  let component: CodeManagementV3Component;
  let fixture: ComponentFixture<CodeManagementV3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeManagementV3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeManagementV3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
