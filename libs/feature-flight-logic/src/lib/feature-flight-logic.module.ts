import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightTableComponent } from './flight-table/flight-table.component';
import { UtilFilterModule } from '@flights-data/util-filter';
import { UiViewFlightsModule } from '@flights-data/ui-view-flights'

@NgModule({
  imports: [CommonModule, FormsModule, UtilFilterModule, UiViewFlightsModule],
  declarations: [
    FlightTableComponent
  ],
  exports : [FlightTableComponent ]
})
export class FeatureFlightLogicModule {}
