import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossaryLoanComponent } from './grossary-loan.component';

describe('GrossaryLoanComponent', () => {
  let component: GrossaryLoanComponent;
  let fixture: ComponentFixture<GrossaryLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrossaryLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrossaryLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
