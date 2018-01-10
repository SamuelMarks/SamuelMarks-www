import { inject, TestBed } from '@angular/core/testing';

import { PlatformPickerService } from './platform-picker.service';

describe('PlatformPickerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlatformPickerService]
    });
  });

  it('should be created', inject([PlatformPickerService], (service: PlatformPickerService) => {
    expect(service).toBeTruthy();
  }));
});
