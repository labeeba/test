import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccelerometerPage } from './accelerometer.page';

describe('AccelerometerPage', () => {
  let component: AccelerometerPage;
  let fixture: ComponentFixture<AccelerometerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccelerometerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccelerometerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
