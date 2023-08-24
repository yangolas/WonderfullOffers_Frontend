import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { companyOffer } from '../models/companyOffer';
import { environment } from 'src/environments/environment';
import { company } from '../models/enumOffers';
import { Observable, map, tap } from 'rxjs';
import { amazonOffer } from '../models/amazonOffer';

const base_url = `${environment.base_url}offerscompany`;

@Injectable({
  providedIn: 'root'
})

export class OfferService{

  constructor(private _http:HttpClient) { }

  public getTotalNumberOffersByCompany(company: company)
    : Observable<number> 
  {
    return this._http.get<number>(
      `${base_url}/numberOffers/type/${company.toString()}`
    )
  }


  public getOffers(
    company: company, 
    pagination: number)
    : Observable<companyOffer[]> 
  {
    return this._http.get<string>(
      `${base_url}/type/${company.toString()}/pagination/${pagination}`
    ).pipe(
      map((response: any) => this.convert(response, company))
    );
  }

  private convert(response: any, companySelected: company): companyOffer[] {
  
    switch (companySelected) {
      case company.Amazon:
        const offersArray = JSON.parse(response.offers) as amazonOffer[];
        offersArray.forEach(offer => {
          offer.TimeSpan = this.formatDateTime(offer.TimeSpan);
        });
        return offersArray;
      default:
        throw new Error("There isn't the expected company");
    }
  }
  
  private formatDateTime(dateTimeString: string): string {
    const date = new Date(dateTimeString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
  
    const monthNames = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
  
    const formattedDateTime = `${hours}:${minutes} del ${day} de ${monthNames[monthIndex]}`;
  
    return formattedDateTime;
  }
}