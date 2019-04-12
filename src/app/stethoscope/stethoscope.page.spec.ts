import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StethoscopePage } from './stethoscope.page';

describe('StethoscopePage', () => {
  let component: StethoscopePage;
  let fixture: ComponentFixture<StethoscopePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StethoscopePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StethoscopePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
