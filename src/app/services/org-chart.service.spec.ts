import { TestBed, inject } from '@angular/core/testing';

import { OrgChartService } from './org-chart.service';

describe('OrgChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrgChartService]
    });
  });

  it('should be created', inject([OrgChartService], (service: OrgChartService) => {
    expect(service).toBeTruthy();
  }));
});
