import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-item',
  templateUrl: './contacts-item.component.html',
  styleUrls: ['./contacts-item.component.scss']
})
export class ContactsItemComponent implements OnInit {

  @Input() public avatar: any;
  @Input() public name: string;
  @Input() public phone: string;
  @Input() public country: string;
  @Input() public admissionDate: Date;
  @Input() public company: string;
  @Input() public department: string;

  constructor() { }

  ngOnInit(): void {
    
  }

  

}
