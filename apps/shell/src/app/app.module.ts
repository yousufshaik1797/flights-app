import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalModule, MsalService, MSAL_INSTANCE } from '@azure/msal-angular';
import {
  IPublicClientApplication,
  PublicClientApplication,
} from '@azure/msal-browser';
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TokenInterceptor } from './services/token-interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const ROUTES:Routes = [
  {path:'',component: WelcomeComponent},
  {path:'viewFlights', loadChildren:()=> import('flights/Module').then((m)=> m.ViewFlightDataModule)},
  {path:'addFlights', loadChildren:()=> import('add-flights/Module').then((m)=> m.NewFlightModule)},
]


export function MsalInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: environment.clientId,
      redirectUri: environment.redirectUrl,
      authority: environment.authority,
    },
  });
}


@NgModule({
  declarations: [AppComponent, WelcomeComponent, ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MsalInstanceFactory,
    },
    MsalService,
    HttpClientModule,    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
