import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectManagementV2Component } from './project-management-v2.component';

describe('ProjectManagementV2Component', () => {
  let component: ProjectManagementV2Component;
  let fixture: ComponentFixture<ProjectManagementV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectManagementV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectManagementV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
