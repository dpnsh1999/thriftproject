import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdCreditWithdrawalComponent } from './rd-credit-withdrawal.component';

describe('RdCreditWithdrawalComponent', () => {
  let component: RdCreditWithdrawalComponent;
  let fixture: ComponentFixture<RdCreditWithdrawalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdCreditWithdrawalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdCreditWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
