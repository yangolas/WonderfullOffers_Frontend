import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = `${environment.base_url}/card`;

@Injectable({
  providedIn: 'root'
})

export class HeaderService {

  constructor(public _http:HttpClient) {}
  private SearchOptionSubject = new Subject<boolean>();
  private SearchBBDD = new Subject<string>();

  public SearchOption$ = this.SearchOptionSubject.asObservable();
  public SearchBBDD$ = this.SearchBBDD.asObservable();

  public emitSearchOption(option:string): void 
  {
    option === 'Search'
      ? this.SearchOptionSubject.next(true)
      : this.SearchOptionSubject.next(false)
  }

  public emitSearchInBBDD(text:string): void 
  {
    this.SearchBBDD.next(text);
  }
}
