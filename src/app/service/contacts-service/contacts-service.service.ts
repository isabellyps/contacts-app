import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Contact } from './contacts-service.model';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  readonly apiUrl: string;

  constructor(private http: HttpClient) {
      this.apiUrl = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';
  }

  contactsList() {
    return this.http.get<Contact[]>(this.apiUrl);
  }

}
