import { TestBed, inject } from '@angular/core/testing';

import { LdhMemberService } from './ldh-member.service';

describe('LdhMemberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LdhMemberService]
    });
  });

  it('should be created', inject([LdhMemberService], (service: LdhMemberService) => {
    expect(service).toBeTruthy();
  }));
});
