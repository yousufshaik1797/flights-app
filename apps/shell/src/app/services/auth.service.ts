import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MsalService } from '@azure/msal-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private authService: MsalService) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.instance.getActiveAccount() != null;
  }
}
