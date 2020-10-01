import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Contact } from '../service/contacts-service/contacts-service.model'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() contactList: Contact[]
  @Input() contactListFilter: Contact[]

  @Output() contactListFilterChange: EventEmitter<Contact[]> = new EventEmitter<
    Contact[]
  >()

  public filterModel: string
  // livro = [];
  // filtro: string;

  faSearch = faSearch

  constructor() {}

  ngOnInit(): void {}

  orderByName() {
    this.contactListFilter = this.contactListFilter.sort((a, b) =>
      a.name < b.name ? -1 : a.name > b.name ? 1 : 0,
    )
  }

  orderByCountry() {
    this.contactListFilter = this.contactListFilter.sort((a, b) =>
      a.country < b.country ? -1 : a.country > b.country ? 1 : 0,
    )
  }

  orderByCompany() {
    this.contactListFilter = this.contactListFilter.sort((a, b) =>
      a.company < b.company ? -1 : a.company > b.company ? 1 : 0,
    )
  }

  orderByDepartament() {
    this.contactListFilter = this.contactListFilter.sort((a, b) =>
      a.department < b.department ? -1 : a.department > b.department ? 1 : 0,
    )
  }

  orderByAdmissionDate() {
    this.contactListFilter = this.contactListFilter.sort((a, b) =>
      a.admissionDate < b.admissionDate
        ? -1
        : a.admissionDate > b.admissionDate
        ? 1
        : 0,
    )
  }

  filterContactList(event: any) {
    console.log(event.target.value)
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
