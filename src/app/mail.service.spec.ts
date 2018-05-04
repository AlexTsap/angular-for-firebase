import { TestBed, inject } from '@angular/core/testing';

import { MailService } from './mail.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('MailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailService],
      schemas: [NO_ERRORS_SCHEMA],
    });
  });

  it('should be created', inject([MailService], (service: MailService) => {
    expect(service).toBeTruthy();
  }));
});
