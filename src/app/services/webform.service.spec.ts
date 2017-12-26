import { TestBed, inject } from '@angular/core/testing';

import { WebformService } from './webform.service';

describe('WebformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebformService]
    });
  });

  it('should be created', inject([WebformService], (service: WebformService) => {
    expect(service).toBeTruthy();
  }));
});
