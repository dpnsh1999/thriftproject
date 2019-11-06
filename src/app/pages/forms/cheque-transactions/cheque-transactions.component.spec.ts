import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeTransactionsComponent } from './cheque-transactions.component';

describe('ChequeTransactionsComponent', () => {
  let component: ChequeTransactionsComponent;
  let fixture: ComponentFixture<ChequeTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
