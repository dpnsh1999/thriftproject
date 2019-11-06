import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDepositComponent } from './loan-deposit.component';

describe('LoanDepositComponent', () => {
  let component: LoanDepositComponent;
  let fixture: ComponentFixture<LoanDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
