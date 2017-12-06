import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMembersV2Component } from './project-members-v2.component';

describe('ProjectMembersV2Component', () => {
  let component: ProjectMembersV2Component;
  let fixture: ComponentFixture<ProjectMembersV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMembersV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMembersV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
