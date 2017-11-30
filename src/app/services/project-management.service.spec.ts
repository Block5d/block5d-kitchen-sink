import { TestBed, inject } from '@angular/core/testing';

import { ProjectManagementService } from './project-management.service';

describe('AddProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectManagementService]
    });
  });

  it('should be created', inject([ProjectManagementService], (service: ProjectManagementService) => {
    expect(service).toBeTruthy();
  }));
});
