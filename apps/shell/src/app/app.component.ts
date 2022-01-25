import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AccountInfo } from '@azure/msal-common';
import { environment } from '../environments/environment';
import { AvailableMicroFrontEndsClient } from './services/app-data.service';

@Component({
  selector: 'flights-data-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shell';
  currentAccount: any;
  canShow: boolean = false;

  showMFE1: boolean | undefined = false;
  showMFE2: boolean | undefined = false;
  showMFE3: boolean | undefined = false;

  constructor(
    private _AppService: AvailableMicroFrontEndsClient,
    private authService: MsalService
  ) {}
  ngOnInit(): void {
    // debugger;
    this.authService.instance.handleRedirectPromise().then((res) => {
      const value = sessionStorage.getItem('account') ?? '';
      const token = sessionStorage.getItem('token') ?? '';
      let account: AccountInfo | null = null;
      let tokenInfo: string | null = null;
      if (value) {
        account = JSON.parse(value) as AccountInfo;
      }
      if (token) {
        tokenInfo = JSON.parse(token);
      }
      if (account && tokenInfo && !this.tokenExpired(tokenInfo)) {
        this.authService.instance.setActiveAccount(account);
        this.canShow = true;
        this.GetRoles();
      } else if (res?.account) {
        this.currentAccount = res.account;
        sessionStorage.setItem('account', JSON.stringify(res.account));
        sessionStorage.setItem('token', JSON.stringify(res.accessToken));
        this.getToken();
      } else {
        this.login();
      }
    });
  }

  login() {
    this.authService.loginRedirect();
  }

  private tokenExpired(token: string) {
    const expiry = JSON.parse(atob(token.split('.')[1])).exp;
    return Math.floor(new Date().getTime() / 1000) >= expiry;
  }

  getToken() {
    const accessTokenRequest = {
      account: this.currentAccount,
      scopes: environment.scopes,
    };
    var tokenRequest = {
      scopes: environment.scopes,
    };
    this.authService
      .acquireTokenSilent(accessTokenRequest)
      .subscribe((result) => {
        next: {
          // debugger;
          sessionStorage.setItem('token', JSON.stringify(result.accessToken));
          this.canShow = true;
          this.authService.instance.setActiveAccount(result.account);
          this.GetRoles();
        }
        error: (err: any) => {
          if (err.name === 'InteractionRequiredAuthError') {
            this.authService
              .acquireTokenSilent(tokenRequest)
              .subscribe((response) => {
                // debugger;

                sessionStorage.setItem(
                  'token',
                  JSON.stringify(response.accessToken)
                );
                this.authService.instance.setActiveAccount(result.account);
              });
          }
        };
      });
  }

  GetRoles() {
    this._AppService.getAllRoles().subscribe((roles) => {
      debugger;
      this.showMFE1 = roles.microFrontEnd1;
      this.showMFE2 = roles.microFrontEnd2;
      this.showMFE3 = roles.microFrontEnd3;
    });
  }
}
