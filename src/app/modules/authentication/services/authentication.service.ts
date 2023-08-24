import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = `${environment.base_url}/auth`

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public token:string|undefined

  constructor(private _http: HttpClient) 
  { 
  }

  get headers() {
    return {
      headers: {
        'token': this.token === undefined? '': this.token,
        'Content-Type': 'application/json'
      }
    }
  }

  login( form: FormGroup ) : Observable<string>
  {
    const observableToken: Observable<string> = this._http
      .post(`${base_url}/login`, 
        { 
          username: form.get('username')?.value,
          password: form.get('password')?.value,
        } 
        ,{responseType: 'json'}
      )
      .pipe(
        tap((resp:any) => 
          this.token = resp.token as string
        )
      );
    return observableToken;
  }

  register( form: FormGroup ) : Observable<any>
  {
    const observableRegister: Observable<any> = this._http
      .post(`${base_url}/register`, 
      { 
        email: form.get('email1')?.value,
        password: form.get('password')?.value,
        username: form.get('username')?.value,
        day: form.get('day')?.value,
        month: form.get('month')?.value,
        year: form.get('year')?.value,
        female: form.get('female')?.value,
        male: form.get('male')?.value,
      } 
      ,{responseType: 'json'}
    );

    return observableRegister;
  }

  usernameAvailable( username: any ) : Observable<any>
  {
    const observableRegister: Observable<any> = this._http
      .get(`${base_url}/register/usernameAvailable/${username}`);

    return observableRegister;
  }

  emailAvailable( email: any ) : Observable<any>
  {
    const observableRegister: Observable<any> = this._http
      .get(`${base_url}/register/emailAvailable/${email}`);

    return observableRegister;
  }

  renewToken() : Observable<any>
  {
    const observableRenewToken: Observable<any> = this._http
      .get(
        `${base_url}/renewtoken`,
        this.headers
      )

    return observableRenewToken;
  }


}

