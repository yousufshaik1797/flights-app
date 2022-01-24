import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { AccountInfo } from '@azure/msal-common';
import { environment } from '../environments/environment';
import { AvailableMicroFrontEndsClient } from './services/app-data.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'flights-data-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'shell';
  currentAccount: any;
  canShow: boolean = false;
  constructor(
    private _AppService: AvailableMicroFrontEndsClient,
    private authService: MsalService
  ) {}
  ngOnInit(): void {
    // debugger;
    // this.authService.instance.handleRedirectPromise().then((res) => {
    //   const value = sessionStorage.getItem('account') ?? '';
    //   const token = sessionStorage.getItem('token') ?? '';
    //   let account: AccountInfo | null = null;
    //   let tokenInfo: string | null = null;
    //   if (value) {
    //     account = JSON.parse(value) as AccountInfo;
    //   }
    //   if (token) {
    //     tokenInfo = JSON.parse(token);
    //   }
    //   if (account && tokenInfo && !this.tokenExpired(tokenInfo)) {
    //     this.authService.instance.setActiveAccount(account);
    //     this.canShow = true;
    //     this.GetRoles();
    //   } else if (res?.account) {
    //     this.currentAccount = res.account;
    //     sessionStorage.setItem('account', JSON.stringify(res.account));
    //     sessionStorage.setItem('token', JSON.stringify(res.accessToken));
    //     this.getToken();

    //     this.authService.instance.setActiveAccount(res.account);
    //     this.canShow = true;
    //     this.GetRoles();
    //   } else {
    //     this.login();
    //   }
    // });
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
    this.authService.acquireTokenSilent(accessTokenRequest).subscribe({
      next: this.handleUpdateResponse.bind(this),
      error: this.handleError.bind(this),
    });
  }

  handleUpdateResponse(a: any) {
    debugger;
    console.log(a);
  }

  handleError() {
    console.log('handled updated res');
  }
  GetRoles() {
    this._AppService.getAllRoles().subscribe((roles) => {
      debugger;
      console.log(roles);
    });
  }
}
