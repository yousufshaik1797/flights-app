import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightTableComponent } from '@flights-data/feature-flight-logic'
import { FeatureFlightLogicModule } from '@flights-data/feature-flight-logic';

const ROUTES:Routes = [
{path: '', component: FlightTableComponent}
]

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FeatureFlightLogicModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ViewFlightDataModule { }
