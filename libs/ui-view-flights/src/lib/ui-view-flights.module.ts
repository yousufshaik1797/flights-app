import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFlightTableComponent } from './view-flight-table/view-flight-table.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ViewFlightTableComponent
  ],
  exports:[ViewFlightTableComponent]
})
export class UiViewFlightsModule {}
