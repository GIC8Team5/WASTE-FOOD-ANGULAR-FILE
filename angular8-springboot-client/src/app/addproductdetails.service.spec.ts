import { TestBed } from '@angular/core/testing';

import { AddproductdetailsService } from './addproductdetails.service';

describe('AddproductdetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddproductdetailsService = TestBed.get(AddproductdetailsService);
    expect(service).toBeTruthy();
  });
});
