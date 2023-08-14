import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonRecComponent } from './common-rec/common-rec.component';
import { DataCopyingComponent } from './data-copying/data-copying.component';
import { FirstListComponent } from './first-list/first-list.component';
import { SecondListComponent } from './second-list/second-list.component';
import { ThirdListComponent } from './third-list/third-list.component';
import { ForthListComponent } from './forth-list/forth-list.component';
import { FifthListComponent } from './fifth-list/fifth-list.component';
import { SixthListComponent } from './sixth-list/sixth-list.component';
import { SeventhListComponent } from './seventh-list/seventh-list.component';
import { EigthListComponent } from './eigth-list/eigth-list.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CommonRecComponent,
    DataCopyingComponent,
    FirstListComponent,
    SecondListComponent,
    ThirdListComponent,
    ForthListComponent,
    FifthListComponent,
    SixthListComponent,
    SeventhListComponent,
    EigthListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
