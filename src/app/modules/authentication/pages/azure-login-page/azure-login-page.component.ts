import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationService } from '@modules/authentication/services/authentication.service';

@Component({
  selector: 'app-azure-login-page',
  templateUrl: './azure-login-page.component.html',
  styleUrls: ['./azure-login-page.component.css']
})
export class AzureLoginPageComponent {

  constructor(private authService: AuthenticationService,
    private _router: Router) { }

  login() {
    this.authService.loginAzure().subscribe({
      next: (result) => {
        this._router.navigate(['/']);
      },
      error: (error) => {
        console.log('Error de inicio de sesión', error);
      }
    });
  }

  logout() {
    this.authService.logoutAzure().subscribe({
      next: (result) => {
        this._router.navigate(['/']);
      },
      error: (error) => {
        console.log('Error de inicio de sesión', error);
      }
    });
  }

}
