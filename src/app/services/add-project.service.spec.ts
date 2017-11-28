import { TestBed, inject } from '@angular/core/testing';

import { AddProjectService } from './add-project.service';

describe('AddProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddProjectService]
    });
  });

  it('should be created', inject([AddProjectService], (service: AddProjectService) => {
    expect(service).toBeTruthy();
  }));
});
