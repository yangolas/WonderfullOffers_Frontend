import { ReactiveFormsModule } from '@angular/forms';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { User } from 'src/app/models/authentication/User';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';


describe('LoginPageComponent-Integration',
    ()=>
    {
        let component: LoginPageComponent;
        let fixture: ComponentFixture<LoginPageComponent>;

        const user: User =
        {
            userId:'0',
            user: 'Dani',
            email: 'test@test.com',
            password: 'test',
            role: 'Admin',
            token: 'test',
        }

        

        const routerSpy = jasmine.createSpyObj(
            'Router', 
            ['navigateByUrl']
        ); 

        beforeEach( () =>
            {

                TestBed.configureTestingModule(
                    {
                        declarations: [ LoginPageComponent],
                        imports: [ 
                            ReactiveFormsModule, 
                            HttpClientModule
                        ],
                        providers: [ 
                            {
                                provide: Router, 
                                useValue: routerSpy
                            },
                        ]
                    }
                )
                fixture = TestBed.createComponent(LoginPageComponent);
                component = fixture.componentInstance;
                fixture.detectChanges();
                
            }
        );

        it('Component should save email, have been call the api and return the user', ()=>
            {
                const authenticationServiceSpy= TestBed.inject(AuthenticationService) as jasmine.SpyObj<AuthenticationService>;
                
                spyOn( authenticationServiceSpy, 'login' ).and
                    .returnValue(of(user));

                const email = 'test@gmail.com'
                component.form.setValue(
                    {
                        email: email,
                        password:'test'
                    }
                );

                component.login();
                expect(localStorage.getItem('email'))
                    .withContext('save in local storage email')
                    .toEqual(email); 

                const spy = routerSpy.navigateByUrl as jasmine.Spy;

                const navArgs = spy
                    .calls
                    .first()
                    .args[0];

                expect(navArgs)
                    .withContext('navigate to / if all okey')
                    .toBe('/'); 


                const spyCalled = authenticationServiceSpy.login as jasmine.Spy;

                expect(spyCalled)
                    .withContext('call login method from Authentication once')
                    .toHaveBeenCalled()
            }
        )

         it('should call swal with error', ()=>
            {
                const authenticationServiceSpy = TestBed.inject(AuthenticationService) as jasmine.SpyObj<AuthenticationService>;
               
                const spySwall = spyOn( 
                    Swal, 
                    'fire'
                )

                spyOn( 
                    authenticationServiceSpy, 
                    'login' 
                )
                    .and
                    .returnValue(throwError(() => new Error('test')));


                component.login();

                expect(spySwall)
                    .withContext('call to swall once')
                    .toHaveBeenCalled()
            }
        )
    }
)