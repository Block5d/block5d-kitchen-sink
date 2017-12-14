import { TestBed, inject } from '@angular/core/testing';

import { WorkflowSubmitService } from './workflow-submit.service';

describe('WorkflowSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkflowSubmitService]
    });
  });

  it('should be created', inject([WorkflowSubmitService], (service: WorkflowSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
