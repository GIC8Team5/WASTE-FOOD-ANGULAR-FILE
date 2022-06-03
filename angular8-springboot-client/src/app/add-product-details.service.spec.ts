import { TestBed } from '@angular/core/testing';

import { AddProductDetailsService } from './add-product-details.service';

describe('AddProductDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddProductDetailsService = TestBed.get(AddProductDetailsService);
    expect(service).toBeTruthy();
  });
});
