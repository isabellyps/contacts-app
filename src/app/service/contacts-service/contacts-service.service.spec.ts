import { Contact } from './contacts-service.model';
import { HttpClientModule } from '@angular/common/http';
import { componentFactoryName } from '@angular/compiler';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { ContactsService } from './contacts-service.service';

describe('ContactsService', () => {
  let service: ContactsService;
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

  beforeEach(() => {
    TestBed.configureTestingModule({
     imports: [ HttpClientModule ]
    });
    service = TestBed.inject(ContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});