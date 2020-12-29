import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsGridComponent } from './contacts-grid.component';

describe('ContactsGridComponent', () => {
  let component: ContactsGridComponent;
  let fixture: ComponentFixture<ContactsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ ContactsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
