import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  const mock = [{
    id: "1",
    name: "Daniela Terry",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/shadeed9/128.jpg",
    company: "Rohan - Pagac",
    department: "Clothing",
    admissionDate: new Date("2019-04-08T19:28:41.878Z"),
    phone: "1-931-065-2122 x879",
    country: "Iceland"
  },
  {
    id: "2",
    name: "Gracie O'Kon",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ma_tiax/128.jpg",
    company: "Feil, Zemlak and Schaden",
    department: "Movies",
    admissionDate: new Date("2019-04-17T10:40:09.218Z"),
    phone: "914.770.6068 x794",
    country: "Holy See (Vatican City State)"
  },
  {
    id: "3",
    name: "Theron Cruickshank",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/guiiipontes/128.jpg",
    company: "Hegmann, Zboncak and O'Hara",
    department: "Electronics",
    admissionDate: new Date("2019-06-06T01:52:35.229Z"),
    phone: "(431) 601-0358 x7994",
    country: "Angola"
  },
  {
    id: "4",
    name: "Maudie Bernier",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/tom_even/128.jpg",
    company: "Osinski - Hintz",
    department: "Automotive",
    admissionDate: new Date("2019-10-29T07:50:37.040Z"),
    phone: "280-931-8732 x277",
    country: "Mauritania"
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [FilterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('orderByName', () => {
    component.orderByNameSelect = false;
    component.contactListFilter = mock;      
    component.orderByName();
    expect(component.contactListFilter).toEqual(
      [{
        id: "1",
        name: "Daniela Terry",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/shadeed9/128.jpg",
        company: "Rohan - Pagac",
        department: "Clothing",
        admissionDate: new Date("2019-04-08T19:28:41.878Z"),
        phone: "1-931-065-2122 x879",
        country: "Iceland"
      },
      {
        id: "2",
        name: "Gracie O'Kon",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ma_tiax/128.jpg",
        company: "Feil, Zemlak and Schaden",
        department: "Movies",
        admissionDate: new Date("2019-04-17T10:40:09.218Z"),
        phone: "914.770.6068 x794",
        country: "Holy See (Vatican City State)"
      },
      {
        id: "4",
        name: "Maudie Bernier",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/tom_even/128.jpg",
        company: "Osinski - Hintz",
        department: "Automotive",
        admissionDate: new Date("2019-10-29T07:50:37.040Z"),
        phone: "280-931-8732 x277",
        country: "Mauritania"
      },
      {
        id: "3",
        name: "Theron Cruickshank",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/guiiipontes/128.jpg",
        company: "Hegmann, Zboncak and O'Hara",
        department: "Electronics",
        admissionDate: new Date("2019-06-06T01:52:35.229Z"),
        phone: "(431) 601-0358 x7994",
        country: "Angola"
      }]);
    expect(component.isSelect).toEqual(true);
    expect(component.orderByNameSelect).toEqual(true);
    expect(component.orderByCountrySelect).toEqual(false);
    expect(component.orderByCompanySelect).toEqual(false);
    expect(component.orderByDepartamentSelect).toEqual(false);
    expect(component.orderByAdmissionDateSelect).toEqual(false);
  });

  it('orderByCountry', () => {
    component.orderByCountrySelect = false;
    component.contactListFilter = mock;
    component.orderByCountry();
    expect(component.contactListFilter).toEqual(
      [{
        id: "3",
        name: "Theron Cruickshank",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/guiiipontes/128.jpg",
        company: "Hegmann, Zboncak and O'Hara",
        department: "Electronics",
        admissionDate: new Date("2019-06-06T01:52:35.229Z"),
        phone: "(431) 601-0358 x7994",
        country: "Angola"
      },
      {
        id: "2",
        name: "Gracie O'Kon",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ma_tiax/128.jpg",
        company: "Feil, Zemlak and Schaden",
        department: "Movies",
        admissionDate: new Date("2019-04-17T10:40:09.218Z"),
        phone: "914.770.6068 x794",
        country: "Holy See (Vatican City State)"
      },
      {
        id: "1",
        name: "Daniela Terry",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/shadeed9/128.jpg",
        company: "Rohan - Pagac",
        department: "Clothing",
        admissionDate: new Date("2019-04-08T19:28:41.878Z"),
        phone: "1-931-065-2122 x879",
        country: "Iceland"
      },
      {
        id: "4",
        name: "Maudie Bernier",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/tom_even/128.jpg",
        company: "Osinski - Hintz",
        department: "Automotive",
        admissionDate: new Date("2019-10-29T07:50:37.040Z"),
        phone: "280-931-8732 x277",
        country: "Mauritania"
      }]);
    expect(component.isSelect).toEqual(true);
    expect(component.orderByNameSelect).toEqual(false);
    expect(component.orderByCountrySelect).toEqual(true);
    expect(component.orderByCompanySelect).toEqual(false);
    expect(component.orderByDepartamentSelect).toEqual(false);
    expect(component.orderByAdmissionDateSelect).toEqual(false);
  });

  it('orderByCompany', () => {
    component.orderByCompanySelect = false;
    component.contactListFilter = mock;
    component.orderByCompany();
    expect(component.contactListFilter).toEqual(
      [{
        id: "2",
        name: "Gracie O'Kon",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ma_tiax/128.jpg",
        company: "Feil, Zemlak and Schaden",
        department: "Movies",
        admissionDate: new Date("2019-04-17T10:40:09.218Z"),
        phone: "914.770.6068 x794",
        country: "Holy See (Vatican City State)"
      },
      {
        id: "3",
        name: "Theron Cruickshank",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/guiiipontes/128.jpg",
        company: "Hegmann, Zboncak and O'Hara",
        department: "Electronics",
        admissionDate: new Date("2019-06-06T01:52:35.229Z"),
        phone: "(431) 601-0358 x7994",
        country: "Angola"
      },
      {
        id: "4",
        name: "Maudie Bernier",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/tom_even/128.jpg",
        company: "Osinski - Hintz",
        department: "Automotive",
        admissionDate: new Date("2019-10-29T07:50:37.040Z"),
        phone: "280-931-8732 x277",
        country: "Mauritania"
      },
      {
        id: "1",
        name: "Daniela Terry",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/shadeed9/128.jpg",
        company: "Rohan - Pagac",
        department: "Clothing",
        admissionDate: new Date("2019-04-08T19:28:41.878Z"),
        phone: "1-931-065-2122 x879",
        country: "Iceland"
      }]);
    expect(component.isSelect).toEqual(true);
    expect(component.orderByNameSelect).toEqual(false);
    expect(component.orderByCountrySelect).toEqual(false);
    expect(component.orderByCompanySelect).toEqual(true);
    expect(component.orderByDepartamentSelect).toEqual(false);
    expect(component.orderByAdmissionDateSelect).toEqual(false);
  });

  it('orderByDepartament', () => {
    component.orderByDepartamentSelect = false;
    component.contactListFilter = mock;
    component.orderByDepartament();
    expect(component.contactListFilter).toEqual(
      [{
        id: "4",
        name: "Maudie Bernier",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/tom_even/128.jpg",
        company: "Osinski - Hintz",
        department: "Automotive",
        admissionDate: new Date("2019-10-29T07:50:37.040Z"),
        phone: "280-931-8732 x277",
        country: "Mauritania"
      },
      {
        id: "1",
        name: "Daniela Terry",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/shadeed9/128.jpg",
        company: "Rohan - Pagac",
        department: "Clothing",
        admissionDate: new Date("2019-04-08T19:28:41.878Z"),
        phone: "1-931-065-2122 x879",
        country: "Iceland"
      },
      {
        id: "3",
        name: "Theron Cruickshank",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/guiiipontes/128.jpg",
        company: "Hegmann, Zboncak and O'Hara",
        department: "Electronics",
        admissionDate: new Date("2019-06-06T01:52:35.229Z"),
        phone: "(431) 601-0358 x7994",
        country: "Angola"
      },
      {
        id: "2",
        name: "Gracie O'Kon",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ma_tiax/128.jpg",
        company: "Feil, Zemlak and Schaden",
        department: "Movies",
        admissionDate: new Date("2019-04-17T10:40:09.218Z"),
        phone: "914.770.6068 x794",
        country: "Holy See (Vatican City State)"
      }]);
    expect(component.isSelect).toEqual(true);
    expect(component.orderByNameSelect).toEqual(false);
    expect(component.orderByCountrySelect).toEqual(false);
    expect(component.orderByCompanySelect).toEqual(false);
    expect(component.orderByDepartamentSelect).toEqual(true);
    expect(component.orderByAdmissionDateSelect).toEqual(false);
  });

  it('orderByAdmissionDate', () => {
    component.orderByAdmissionDateSelect = false;
    component.contactListFilter = mock;
    component.orderByAdmissionDate();
    expect(component.contactListFilter).toEqual(
      [{
        id: "1",
        name: "Daniela Terry",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/shadeed9/128.jpg",
        company: "Rohan - Pagac",
        department: "Clothing",
        admissionDate: new Date("2019-04-08T19:28:41.878Z"),
        phone: "1-931-065-2122 x879",
        country: "Iceland"
      },
      {
        id: "2",
        name: "Gracie O'Kon",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/ma_tiax/128.jpg",
        company: "Feil, Zemlak and Schaden",
        department: "Movies",
        admissionDate: new Date("2019-04-17T10:40:09.218Z"),
        phone: "914.770.6068 x794",
        country: "Holy See (Vatican City State)"
      },
      {
        id: "3",
        name: "Theron Cruickshank",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/guiiipontes/128.jpg",
        company: "Hegmann, Zboncak and O'Hara",
        department: "Electronics",
        admissionDate: new Date("2019-06-06T01:52:35.229Z"),
        phone: "(431) 601-0358 x7994",
        country: "Angola"
      },
      {
        id: "4",
        name: "Maudie Bernier",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/tom_even/128.jpg",
        company: "Osinski - Hintz",
        department: "Automotive",
        admissionDate: new Date("2019-10-29T07:50:37.040Z"),
        phone: "280-931-8732 x277",
        country: "Mauritania"
      }]);
    expect(component.isSelect).toEqual(true);
    expect(component.orderByNameSelect).toEqual(false);
    expect(component.orderByCountrySelect).toEqual(false);
    expect(component.orderByCompanySelect).toEqual(false);
    expect(component.orderByDepartamentSelect).toEqual(false);
    expect(component.orderByAdmissionDateSelect).toEqual(true);
  });
});
