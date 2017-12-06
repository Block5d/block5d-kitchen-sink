import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeManagementV2Component } from './code-management-v2.component';

describe('CodeManagementV2Component', () => {
  let component: CodeManagementV2Component;
  let fixture: ComponentFixture<CodeManagementV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeManagementV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeManagementV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
