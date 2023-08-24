import { TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { of } from 'rxjs';

import { AuthenticationService } from './authentication.service';
import { User } from '../../../models/authentication/User';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

const form = new FormGroup(
    {
        email: new FormControl(
            '',
            [
                Validators.required,
                Validators.email
            ]
        ),
        password: new FormControl(
            '',
            [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(12)
            ]
        ),
    }
)

const _user: User =
{
    userId:'0',
    user: 'Dani',
    email: 'test@test.com',
    password: 'test',
    role: 'Admin',
    token: 'test',
}

describe('AuthenticationService',
    ()=>
    {
        const httpSpy = jasmine
          .createSpyObj(
            'HttpClient',
             {
              get: of(_user),
              post: of ({})
             }
          )

        const authenticationService = new AuthenticationService(httpSpy)


        it('Should do a call to the api and set the user', ()=>
            {
                authenticationService
                    .login(form)
                    .subscribe(
                        {
                            next:(user:User)=>
                            {
                                expect(user).toEqual(_user);
                            }
                        }
                    )
                expect(authenticationService.user).toEqual(_user);
            }
        )
    }
)
