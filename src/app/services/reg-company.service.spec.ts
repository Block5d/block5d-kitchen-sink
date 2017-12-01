import { TestBed, inject } from '@angular/core/testing';

import { RegCompanyService } from './reg-company.service';

describe('RegCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegCompanyService]
    });
  });

  it('should be created', inject([RegCompanyService], (service: RegCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
