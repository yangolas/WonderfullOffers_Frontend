import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../modules/authentication/services/authentication.service';
import { Router } from '@angular/router';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  public isSearchOption:boolean = false;
  public searchText: string;

  constructor(
    public authentication:AuthenticationService,
    private _headerService: HeaderService,
    private _router:Router) { 
  }

  ngOnInit(): void 
  {
    const inputEnabled = localStorage.getItem('searchText');
    this.isSearchOption = inputEnabled === 'true';

    this._headerService.SearchOption$.subscribe((isActivated:boolean) => {
      this.isSearchOption = isActivated
      localStorage.setItem('searchText', isActivated.toString());
    });

    this._headerService.SearchBBDD$.subscribe((text:string) =>
      {
        this.searchText = text;
      }
    );
  }

  onSearchTextChange(): void 
  {
    this._headerService.emitSearchInBBDD(this.searchText);
  }

  deleteToken()
  {
    location.reload();
  }

  private toggleInput() 
  {
    this.isSearchOption = !this.isSearchOption;
    localStorage.setItem('inputEnabled', this.isSearchOption.toString());
  }

  login() {
    this.toggleInput()
  }

  logout() {
    this.toggleInput()
  }
}
