import { TestBed } from '@angular/core/testing';

import { ConfigBuilderService } from './config-builder.service';

describe('ConfigBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigBuilderService = TestBed.get(ConfigBuilderService);
    expect(service).toBeTruthy();
  });
});
