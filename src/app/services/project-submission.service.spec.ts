import { TestBed, inject } from '@angular/core/testing';

import { ProjectSubmissionService } from './project-submission.service';

describe('ProjectSubmissionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectSubmissionService]
    });
  });

  it('should be created', inject([ProjectSubmissionService], (service: ProjectSubmissionService) => {
    expect(service).toBeTruthy();
  }));
});
