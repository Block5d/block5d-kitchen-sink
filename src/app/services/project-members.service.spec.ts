import { TestBed, inject } from '@angular/core/testing';

import { ProjectMembersService } from './project-members.service';

describe('ProjectMembersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectMembersService]
    });
  });

  it('should be created', inject([ProjectMembersService], (service: ProjectMembersService) => {
    expect(service).toBeTruthy();
  }));
});
