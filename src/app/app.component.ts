import { Component, OnInit } from '@angular/core';
import { Contact } from './service/contacts-service/contacts-service.model';
import { ContactsService } from './service/contacts-service/contacts-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  title = 'contacts-app';
  public contactList: Contact[];
  public contactListFilter: Contact[];
  
  constructor(private contactService: ContactsService) { 
    this.contactService.contactsList()
      .subscribe((contacts: Contact[]) => {
        this.contactList = contacts;
        this.contactListFilter = contacts;
    });
  } 
}
