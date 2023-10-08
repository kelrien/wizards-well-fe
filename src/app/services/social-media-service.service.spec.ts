import { TestBed } from '@angular/core/testing';

import { SocialMediaServiceService } from './social-media-service.service';

describe('SocialMediaServiceService', () => {
  let service: SocialMediaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialMediaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
