/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DonationFoodRunComponent } from './donation-food-run.component';

describe('DonationFoodRunComponent', () => {
  let component: DonationFoodRunComponent;
  let fixture: ComponentFixture<DonationFoodRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationFoodRunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationFoodRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
