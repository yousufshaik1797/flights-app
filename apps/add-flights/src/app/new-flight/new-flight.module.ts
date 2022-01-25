
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddFlightsComponent } from '@flights-data/ui-add-flights';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ROUTES: Routes = [
  {path:'', component: AddFlightsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,RouterModule.forChild(ROUTES)
  ]
})
export class NewFlightModule { }
