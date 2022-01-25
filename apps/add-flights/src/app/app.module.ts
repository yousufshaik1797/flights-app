import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NewFlightModule } from './new-flight/new-flight.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


const ROUTES : Routes = [
  {path: '', loadChildren:()=> import('./new-flight/new-flight.module').then((m)=>m.NewFlightModule)}
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,FormsModule,
    RouterModule.forRoot(ROUTES),
    NewFlightModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
