import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contacts-service.model';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  readonly apiUrl: string;

  constructor(private http: HttpClient) {
      this.apiUrl = 'https://5f074ac59c5c250016306ca1.mockapi.io/api/v1/contacts';
  }

  contactsList() {
    return this.http.get<Contact[]>(this.apiUrl);
  }

}
