import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FilterComponent } from './filter/filter.component';
import { ContactsGridComponent } from './contacts-grid/contacts-grid.component';
import { CommonModule } from '@angular/common';
import { ContactsItemComponent } from './contacts-grid/contacts-item/contacts-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FilterComponent,
    ContactsGridComponent,
    ContactsItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
