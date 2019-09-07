import { TestBed } from '@angular/core/testing';

import { GoldSilverSharedService } from './gold-silver-shared.service';

describe('GoldSilverSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoldSilverSharedService = TestBed.get(GoldSilverSharedService);
    expect(service).toBeTruthy();
  });
});
