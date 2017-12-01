import { TestBed, inject } from '@angular/core/testing';

import { PersonManagementService } from './person-management.service';

describe('PersonManagementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonManagementService]
    });
  });

  it('should be created', inject([PersonManagementService], (service: PersonManagementService) => {
    expect(service).toBeTruthy();
  }));
});
