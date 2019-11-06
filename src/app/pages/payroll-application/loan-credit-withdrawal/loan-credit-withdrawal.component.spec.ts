import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanCreditWithdrawalComponent } from './loan-credit-withdrawal.component';

describe('LoanCreditWithdrawalComponent', () => {
  let component: LoanCreditWithdrawalComponent;
  let fixture: ComponentFixture<LoanCreditWithdrawalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanCreditWithdrawalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanCreditWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
