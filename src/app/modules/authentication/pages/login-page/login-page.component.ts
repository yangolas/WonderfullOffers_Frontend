import { Component, ElementRef, OnInit, ViewChild, AfterContentChecked } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../../../../models/authentication/User';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, AfterContentChecked
{

  @ViewChild('login') loginElement:ElementRef = new ElementRef('');
  
  public width:number
  public form:FormGroup


  constructor(
    private _authenticationService:AuthenticationService,
    private _router:Router
    ) 
  { 
  }
  
  
  ngOnInit(): void 
  {

    this.createForm();

    addEventListener('resize', 
      this.onresize, 
      false
      );
  }

  createForm()
  {
    const user = localStorage.getItem('user') == null
      ?''
      :localStorage.getItem('user')

    const password = localStorage.getItem('password') == null
      ?''
      :localStorage.getItem('password')

    this.form = new FormGroup(
      {
          username: new FormControl(
            user,
            [ Validators.required]
          ),
          password: new FormControl(
            password,
            [ Validators.required]
          ),
      }
    )
  }

  onresize = () => 
  {
    this.calculateWidth()
  };

  ngAfterContentChecked(): void 
  {
    this.calculateWidth()
  }

  private calculateWidth()
  {
    const width = this.loginElement.nativeElement;
    width=== ""?
    setTimeout(()=>
      {
        this.calculateWidth()
      }, 
      1
    ):
    (this.width = (((width.offsetWidth-227.33)/2)/width.offsetWidth)*100)
  }

  public setLogin()
  {
    this._authenticationService
      .login(this.form)
      .subscribe(
        {
          next: (token) =>
          {
            localStorage.setItem(
              'user',
              this.form.get('username')?.value
            )
            localStorage.setItem(
              'password',
              this.form.get('password')?.value
            )
            this._router.navigateByUrl('/')
          },
          error: (err) =>
          {
            Swal.fire('Error', 'user or password incorrect', 'error' );
          }
        }
      );
  } 
}
