import { TestBed, inject } from '@angular/core/testing';

import { CodeManaService } from './code-mana.service';

describe('CodeManaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodeManaService]
    });
  });

  it('should be created', inject([CodeManaService], (service: CodeManaService) => {
    expect(service).toBeTruthy();
  }));
});
