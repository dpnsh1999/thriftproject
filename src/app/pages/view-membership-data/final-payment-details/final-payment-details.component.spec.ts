import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalPaymentDetailsComponent } from './final-payment-details.component';

describe('FinalPaymentDetailsComponent', () => {
  let component: FinalPaymentDetailsComponent;
  let fixture: ComponentFixture<FinalPaymentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalPaymentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalPaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
