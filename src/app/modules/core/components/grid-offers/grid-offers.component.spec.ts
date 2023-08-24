import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOffersComponent } from './grid-offers.component';

describe('GridOffersComponent', () => {
  let component: GridOffersComponent;
  let fixture: ComponentFixture<GridOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
