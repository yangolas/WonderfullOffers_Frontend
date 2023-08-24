import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AzureLoginPageComponent } from "./pages/azure-login-page/azure-login-page.component";



const childRoutes: Routes = [
    { 
        path: '',
        redirectTo:'login',
        pathMatch:'full'
    },
    { 
        path: 'login', 
        // component: LoginPageComponent, 
        component: AzureLoginPageComponent, 
        data: { titulo: 'Spotify-Login' } 
    },
    { 
        path: 'register', 
        component: RegisterPageComponent,
        // canActivate: [ AuthGuard ],
        // canLoad: [ AuthGuard ],
        data: { titulo: 'Spotify-Sign Up' } 
    }
]

@NgModule({
    imports: [ RouterModule.forChild(childRoutes)],
    exports: [ RouterModule ]
  })
  export class AuthenticationChildsRoutesModule { }