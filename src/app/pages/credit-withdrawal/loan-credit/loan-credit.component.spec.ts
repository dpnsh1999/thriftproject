import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanCreditComponent } from './loan-credit.component';

describe('LoanCreditComponent', () => {
  let component: LoanCreditComponent;
  let fixture: ComponentFixture<LoanCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
