import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '@modules/authentication/services/authentication.service';
import { LoginPageComponent } from './login-page.component';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('LoginPageComponent',
    ()=>
    {
        let component: LoginPageComponent;
        let fixture: ComponentFixture<LoginPageComponent>;

        beforeEach( () =>
            {
                TestBed.configureTestingModule(
                    {
                        declarations: [ LoginPageComponent],
                        imports: [ 
                            ReactiveFormsModule, 
                            RouterTestingModule,
                            HttpClientModule
                        ],
                        providers: [ AuthenticationService]
                    }
                )
                
                fixture = TestBed.createComponent(LoginPageComponent);
                component = fixture.componentInstance;
            }
        );

        it('Form login', ()=>
            {
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
                
                component.createForm();

                expect(component.form.value).toEqual(form.value);
            }
        )
    }
)