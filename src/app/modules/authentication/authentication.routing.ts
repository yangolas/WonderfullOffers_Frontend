import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationPageComponent } from './authentication-page.component';



const routes: Routes = [
  { 
      path: 'authentication', 
      component:AuthenticationPageComponent,
      loadChildren: () => import('./authentication-childs-routes.module').then( m => m.AuthenticationChildsRoutesModule )
  }
];

// const routes: Routes = [
//   {
//     path:'',
//     loadChildren: () => import('@modules/home/home.module').then(module => module.HomeModule)
//   },
//   {
//     // path:'tracks/:type/:id',
//     path:'tracks/:cardType/:id',
//     loadChildren: () => import('@modules/tracks/tracks.module').then(module => module.TracksModule),
//   },
//   {
//     path:'**',
//     redirectTo: ''
//   },
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
