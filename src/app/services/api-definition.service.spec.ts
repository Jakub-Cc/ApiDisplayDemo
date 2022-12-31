import { TestBed } from '@angular/core/testing';

import { ApiDefinitionService } from './api-definition.service';

describe('ApiDefinitionService', () => {
  let service: ApiDefinitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDefinitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
