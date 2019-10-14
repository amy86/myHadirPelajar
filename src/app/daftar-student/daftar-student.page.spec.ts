import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarStudentPage } from './daftar-student.page';

describe('DaftarStudentPage', () => {
  let component: DaftarStudentPage;
  let fixture: ComponentFixture<DaftarStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarStudentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
