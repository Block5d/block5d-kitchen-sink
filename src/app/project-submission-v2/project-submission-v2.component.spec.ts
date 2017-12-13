import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSubmissionV2Component } from './project-submission-v2.component';

describe('ProjectSubmissionV2Component', () => {
  let component: ProjectSubmissionV2Component;
  let fixture: ComponentFixture<ProjectSubmissionV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSubmissionV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSubmissionV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
