import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollAdviceComponent } from './payroll-advice.component';

describe('PayrollAdviceComponent', () => {
  let component: PayrollAdviceComponent;
  let fixture: ComponentFixture<PayrollAdviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollAdviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
