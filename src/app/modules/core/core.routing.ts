import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorePageComponent } from './core-page.component';


const routes: Routes = [
  { 
      path: '', 
      component:CorePageComponent,
      loadChildren: () => import('./core-childs-routes.module').then( m => m.CoreChildsRoutesModule )
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
