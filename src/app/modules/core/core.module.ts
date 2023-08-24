import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridOffersComponent } from './components/grid-offers/grid-offers.component';
import { OfferPageComponent } from './pages/offer-page/offer-page.component';
import { CorePageComponent } from './core-page.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreRoutingModule } from './core.routing';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { SelectOptionComponent } from './components/select-option/select-option.component';
import { TemplatePageComponent } from './pages/template-page/template-page.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { GroupboxComponent } from './components/groupbox/groupbox.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    OfferPageComponent,
    TemplatePageComponent,
    GridOffersComponent,
    PaginationComponent,
    CorePageComponent,
    SelectOptionComponent,
    ViewerComponent,
    GroupboxComponent
  ],
  imports: [
    CoreRoutingModule,
    SharedModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ]
})
export class CoreModule { }
