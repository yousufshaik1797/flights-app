import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';


const ROUTES:Routes = [
  {path:'',component: WelcomeComponent},
  {path:'viewFlights', loadChildren:()=> import('flights/Module').then((m)=> m.ViewFlightDataModule)}
]

@NgModule({
  declarations: [AppComponent, WelcomeComponent, ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
