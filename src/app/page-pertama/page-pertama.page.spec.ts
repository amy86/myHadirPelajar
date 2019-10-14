import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePertamaPage } from './page-pertama.page';

describe('PagePertamaPage', () => {
  let component: PagePertamaPage;
  let fixture: ComponentFixture<PagePertamaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePertamaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePertamaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
