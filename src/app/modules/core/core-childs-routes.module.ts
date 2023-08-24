import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OfferPageComponent } from "./pages/offer-page/offer-page.component";
import { TemplatePageComponent } from "./pages/template-page/template-page.component";


const childRoutes: Routes = [
    { 
        path: '', 
        component: OfferPageComponent, 
        data: { titulo: 'Offers' } 
    },
    { 
        path: 'template', 
        component: TemplatePageComponent, 
        data: { titulo: 'Template' } 
    },

]

@NgModule({
    imports: [ RouterModule.forChild(childRoutes)],
    exports: [ RouterModule ]
  })
  export class CoreChildsRoutesModule { }