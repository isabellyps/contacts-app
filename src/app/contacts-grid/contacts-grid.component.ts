import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../service/contacts-service/contacts-service.model';
import { ContactsService } from '../service/contacts-service/contacts-service.service';

@Component({
  selector: 'app-contacts-grid',
  templateUrl: './contacts-grid.component.html',
  styleUrls: ['./contacts-grid.component.scss']
})
export class ContactsGridComponent implements OnInit {

  @Input() contacts: Contact[];

  constructor() { }

  ngOnInit(): void {
  }

}
