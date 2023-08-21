import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonRecComponent} from "./common-rec/common-rec.component";
import {DataCopyingComponent} from "./data-copying/data-copying.component";
import {FirstListComponent} from "./first-list/first-list.component";
import {SecondListComponent} from "./second-list/second-list.component";
import {ThirdListComponent} from "./third-list/third-list.component";
import {ForthListComponent} from "./forth-list/forth-list.component";
import {FifthListComponent} from "./fifth-list/fifth-list.component";
import {SixthListComponent} from "./sixth-list/sixth-list.component";
import {SeventhListComponent} from "./seventh-list/seventh-list.component";
import {EigthListComponent} from "./eigth-list/eigth-list.component";

const routes: Routes = [
  {path: '', component: CommonRecComponent},
  {path: 'data-copying', component: DataCopyingComponent},
  {path: 'first', component: FirstListComponent},
  {path: 'second', component: SecondListComponent},
  {path: 'third', component: ThirdListComponent},
  {path: 'forth', component: ForthListComponent},
  {path: 'fifth', component: FifthListComponent},
  {path: 'sixth', component: SixthListComponent},
  {path: 'seventh', component: SeventhListComponent},
  {path: 'eight', component: EigthListComponent},
  {path: '**', redirectTo: '/'}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
