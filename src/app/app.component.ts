import { Component, Inject, OnInit } from '@angular/core';
import { Contact } from './service/contacts-service/contacts-service.model';
import { ContactsService } from './service/contacts-service/contacts-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  public contactList: Contact[];
  public contactListFilter: Contact[];
  
  constructor(@Inject(ContactsService) private contactService: ContactsService) { 
    this.contactService.contactsList()
      .subscribe((contacts: Contact[]) => {
        this.contactList = contacts;
        this.contactListFilter = contacts;
    });
  } 
}
