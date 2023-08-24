import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  @ViewChild('register') registerElement:ElementRef = new ElementRef('');
  
  public width:number
  public form:FormGroup

  constructor(private _authentication:AuthenticationService) { }

  ngOnInit(): void 
  {
    this.createForm();
    this.userNameAvailable(),
    this.emailAvailable();
    
    addEventListener('resize', 
      this.onresize, 
      false
      );
  }

  createForm()
  {
    // this.form = new FormGroup(
    //   {
    //       email1: new FormControl(
    //         'test@test.com',
    //         [ 
    //           Validators.required, 
    //           Validators.email
    //         ]
    //       ),
    //       email2: new FormControl(
    //         'test@test.com',
    //         [ Validators.required, Validators.email]
    //       ),
    //       password: new FormControl(
    //         'D@4perro',
    //         [ 
    //           Validators.required,
    //           Validators.minLength(6),
    //           Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
    //         ]
    //       ),
    //       username: new FormControl(
    //         'Yangolas',
    //         [ 
    //           Validators.required, 
    //           Validators.minLength(4), 
    //           Validators.maxLength(8),
    //           Validators.pattern(/^[A-z0-9]*$/)
    //         ]
    //       ),
    //       day: new FormControl(
    //         '03',
    //         [ 
    //           Validators.required, 
    //           Validators.pattern("((0?[1-9])|([12][0-9])|(3[01]))")
    //         ]
    //       ),
    //       month: new FormControl(
    //         '07',
    //         [ Validators.required]
    //       ),
    //       year: new FormControl(
    //         '1994',
    //         [ 
    //           Validators.required, 
    //           Validators.pattern("(19[0-9]{2})|(200)[0-9]")
    //         ]
    //       ),
    //       male: new FormControl(
    //         'male'
    //       ),
    //       female: new FormControl(
    //         ''
    //       ),
    //   }, 
      this.form = new FormGroup(
        {
            email1: new FormControl(
              'yanguasuah@gmail.com',
              [ 
                Validators.required, 
                Validators.email
              ]
            ),
            email2: new FormControl(
              'yanguasuah@gmail.com',
              [ Validators.required, Validators.email]
            ),
            password: new FormControl(
              'D@4perro',
              [ 
                Validators.required,
                Validators.minLength(6),
                Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
              ]
            ),
            username: new FormControl(
              'Yangolas',
              [ 
                Validators.required, 
                Validators.minLength(4), 
                Validators.maxLength(8),
                Validators.pattern(/^[A-z0-9]*$/)
              ]
            ),
            day: new FormControl(
              '03',
              [ 
                Validators.required, 
                Validators.pattern("((0?[1-9])|([12][0-9])|(3[01]))")
              ]
            ),
            month: new FormControl(
              '',
              [ Validators.required]
            ),
            year: new FormControl(
              '1994',
              [ 
                Validators.required, 
                Validators.pattern("(19[0-9]{2})|(200)[0-9]")
              ]
            ),
            gendre: new FormControl(
              ''
            ),
        },
      {
        validators: 
        [
          this.equalEmails('email1','email2'),
          this.isSelectedGender('gendre'),
        ]
      } 
    );
  }

  
  public equalEmails(email1: string, email2: string )
  {
    return (control: AbstractControl): { [key: string]: any } | null => 
    { 
      const email1Control = control.get(email1);
      const email2Control = control.get(email2);
      
      let errors = null;
      
      if ( email1Control?.value !== email2Control?.value ) 
      {
        errors = { notEquivalent: true };
      } 
      
      email2Control?.setErrors(errors)
      return errors
    }
  }

  public isSelectedGender(gendreText: string)
  {
    return (control: AbstractControl): { [key: string]: any } | null => 
    { 
      const gendre = control.get(gendreText);

      let errors = null;

      if (
        gendre?.value !== 'male' 
        && gendre?.value !== 'female'
      )
      {
        errors = { selectGender: true };
      }
      
      gendre?.setErrors(errors)

      return errors
    }
  }

  public userNameAvailable()
  {
    this.form
    .get('username')?.valueChanges
    .pipe(debounceTime(500)).subscribe(value => 
      {
        if (value) 
        {
          this._authentication.usernameAvailable(value)
            .subscribe(available => 
              {
                available
                ? this.form.get('username')?.setErrors(null)
                : this.form.get('username')?.setErrors({ usernameNoAvailable: true });
              }
          );
        }
      }
    );
  }

  public emailAvailable()
  {
    this.form
    .get('email1')?.valueChanges
    .pipe(debounceTime(500)).subscribe(value => 
      {
        if (value) 
        {
          this._authentication.emailAvailable(value)
            .subscribe(available => 
              {
                available
                  ? this.form.get('email1')?.setErrors(null)
                  : this.form.get('email1')?.setErrors({ emailNoAvailable: true })
              }
          );
        }
      }
    );
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
    const width = this.registerElement.nativeElement;
    width === ""?
      setTimeout(()=>
        {
          this.calculateWidth()
        }, 
        1
      ):
      (this.width = (((width.offsetWidth-227.33)/2)/width.offsetWidth)*100)
  }

  public setRegistration()
  {
    this._authentication
      .register(this.form)
      .subscribe( register=>
        {
          next:()=>
          {
            console.log("nice")
          }
          error:()=>
          {
            console.log("bad")
          }
        }

      )
  }

}
