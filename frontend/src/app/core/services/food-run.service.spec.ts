/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FoodRunService } from './food-run.service';

describe('Service: FoodRun', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodRunService]
    });
  });

  it('should ...', inject([FoodRunService], (service: FoodRunService) => {
    expect(service).toBeTruthy();
  }));
});
