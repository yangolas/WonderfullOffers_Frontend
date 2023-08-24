import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureLoginPageComponent } from './azure-login-page.component';

describe('AzureLoginPageComponent', () => {
  let component: AzureLoginPageComponent;
  let fixture: ComponentFixture<AzureLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzureLoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzureLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
