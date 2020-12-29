import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Contact } from '../service/contacts-service/contacts-service.model'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() contactList: Contact[];
  @Input() contactListFilter: Contact[];

  @Output() contactListFilterChange: EventEmitter<Contact[]> = new EventEmitter<
    Contact[]
  >()

  public filterModel: string;
  public isSelect: boolean;
  public orderByNameSelect: boolean;
  public orderByCountrySelect: boolean;
  public orderByCompanySelect: boolean;
  public orderByDepartamentSelect: boolean;
  public orderByAdmissionDateSelect: boolean;

  faSearch = faSearch;

  constructor() {
    this.isSelect = false;
    this.orderByNameSelect = false;
    this.orderByCountrySelect = false;
    this.orderByCompanySelect = false;
    this.orderByDepartamentSelect = false;
    this.orderByAdmissionDateSelect = false;
  }

  ngOnInit(): void {}

  orderByName() {
    if(!this.orderByNameSelect)
    {
      this.contactListFilter = this.contactListFilter.sort((a, b) =>
      a.name < b.name ? -1 : a.name > b.name ? 1 : 0,
    )
    this.isSelect = true;
    this.orderByNameSelect = true;
    this.orderByCountrySelect = false;
    this.orderByCompanySelect = false;
    this.orderByDepartamentSelect = false;
    this.orderByAdmissionDateSelect = false;
    }  
  }

  orderByCountry() {
    if(!this.orderByCountrySelect) {
      this.contactListFilter = this.contactListFilter.sort((a, b) =>
      a.country < b.country ? -1 : a.country > b.country ? 1 : 0,
    )
    this.isSelect = true;
    this.orderByCountrySelect = true;
    this.orderByNameSelect = false;
    this.orderByCompanySelect = false;
    this.orderByDepartamentSelect = false;
    this.orderByAdmissionDateSelect = false;
    }
    
  }

  orderByCompany() {
    if(!this.orderByCompanySelect) {
      this.contactListFilter = this.contactListFilter.sort((a, b) =>
      a.company < b.company ? -1 : a.company > b.company ? 1 : 0,
    )
    this.isSelect = true;
    this.orderByCompanySelect = true;
    this.orderByNameSelect = false;
    this.orderByCountrySelect = false;
    this.orderByDepartamentSelect = false;
    this.orderByAdmissionDateSelect = false;
    }
  }

  orderByDepartament() {
    if(!this.orderByDepartamentSelect) {
      this.contactListFilter = this.contactListFilter.sort((a, b) =>
      a.department < b.department ? -1 : a.department > b.department ? 1 : 0,
    )
    this.isSelect = true;
    this.orderByDepartamentSelect = true;
    this.orderByNameSelect = false;
    this.orderByCountrySelect = false;
    this.orderByCompanySelect = false;
    this.orderByAdmissionDateSelect = false;
    }
  }

  orderByAdmissionDate() {
    if(!this.orderByAdmissionDateSelect) {
      this.contactListFilter = this.contactListFilter.sort((a, b) =>
      a.admissionDate < b.admissionDate
        ? -1
        : a.admissionDate > b.admissionDate
        ? 1
        : 0,
    )
    this.isSelect = true;
    this.orderByAdmissionDateSelect = true;
    this.orderByNameSelect = false;
    this.orderByCountrySelect = false;
    this.orderByCompanySelect = false;
    this.orderByDepartamentSelect = false;
    }
  }

  filterContactList(event: any) {
    if (event.target.value) {
      this.contactListFilter = this.contactList.filter((value) =>
        value.name.toLowerCase().includes(event.target.value.toLowerCase()),
      )
    } else {
      this.contactListFilter = this.contactList
    }
    this.contactListFilterChange.emit(this.contactListFilter)
  }
}
