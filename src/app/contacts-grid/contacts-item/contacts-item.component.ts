import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/service/contacts-service/contacts-service.model';
import { ContactsService } from 'src/app/service/contacts-service/contacts-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts-item',
  templateUrl: './contacts-item.component.html',
  styleUrls: ['./contacts-item.component.scss']
})
export class ContactsItemComponent implements OnInit {

  contact = {} as Contact;
  contacts: Contact[];

  constructor(private contactService: ContactsService) { }

  ngOnInit(): void {
    this.contactList();
  }

  contactList() {
    this.contactService.contactsList()
      .subscribe((contacts: Contact[]) => {
        this.contacts = contacts;
    });
  }

}
