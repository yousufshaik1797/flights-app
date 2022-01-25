import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddFlightsComponent } from './add-flights/add-flights.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiPopupModule } from '@flights-data/ui-popup';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule,FormsModule, UiPopupModule],
  declarations: [
    AddFlightsComponent
  ],
  exports: [AddFlightsComponent]
})
export class UiAddFlightsModule {}
