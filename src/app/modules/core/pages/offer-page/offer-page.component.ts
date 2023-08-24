import { Component, OnInit } from '@angular/core';
import { company } from '../../models/enumOffers';
import { OfferService } from '../../services/offer.service';
import { companyOffer } from '../../models/companyOffer';

@Component({
  selector: 'app-offer-page',
  templateUrl: './offer-page.component.html',
  styleUrls: ['./offer-page.component.css']
})
export class OfferPageComponent implements OnInit {
  
  public selectedCompany:company = company.Amazon
  public comboCompanies = Object.values(company);
  public pageSize:number = 60;
  public currentPage:number = 1;

  public totalPages:number = 0;
  public offers: companyOffer[] = []
  
  constructor(private _offerService : OfferService) {}

  ngOnInit(): void 
  {
    this.setTotalNumberOffers();
    this.getOffers();
  }

  private getOffers()
  {
    this._offerService.getOffers(
      this.selectedCompany,
      (this.currentPage-1) * this.pageSize
    )
    .subscribe( 
      {
        next:(resp:companyOffer[])=>
        {
          this.offers = resp;
        },
        error:()=>
        {
          this.offers=[]
        }
      }
    );
  }

  onPageChange(page: number) 
  {
    this.currentPage = page;
    this.getOffers();
  }

  onOptionChange(option: string) 
  {
    this.selectedCompany = company[option as keyof typeof company];
    this.currentPage = 1;
    this.getOffers();
  }

  private setTotalNumberOffers()
  {
    this._offerService.getTotalNumberOffersByCompany(this.selectedCompany)
    .subscribe( 
      {
        next:(numberOffers:number)=>
        {
          this.totalPages = Math.ceil(numberOffers / this.pageSize);
        },
        error:()=>
        {
          console.log();
        }
      }
    );
  }
}