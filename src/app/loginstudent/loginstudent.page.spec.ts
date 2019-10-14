import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginstudentPage } from './loginstudent.page';

describe('LoginstudentPage', () => {
  let component: LoginstudentPage;
  let fixture: ComponentFixture<LoginstudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginstudentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginstudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
