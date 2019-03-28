import { TestBed, inject } from '@angular/core/testing';

import { SaveMessageService } from './save-message.service';

describe('SaveMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveMessageService]
    });
  });

  it('should be created', inject([SaveMessageService], (service: SaveMessageService) => {
    expect(service).toBeTruthy();
  }));
});
