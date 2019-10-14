import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsubjectPage } from './listsubject.page';

describe('ListsubjectPage', () => {
  let component: ListsubjectPage;
  let fixture: ComponentFixture<ListsubjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsubjectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsubjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
