import { Component, Input, OnInit } from '@angular/core';
import { companyOffer } from '../../models/companyOffer';

@Component({
  selector: 'app-grid-offers',
  templateUrl: './grid-offers.component.html',
  styleUrls: ['./grid-offers.component.css']
})

export class GridOffersComponent  
{
  @Input() offers: companyOffer[]
}