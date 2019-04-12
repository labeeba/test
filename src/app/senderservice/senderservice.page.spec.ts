import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderservicePage } from './senderservice.page';

describe('SenderservicePage', () => {
  let component: SenderservicePage;
  let fixture: ComponentFixture<SenderservicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenderservicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenderservicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
