import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPositionOfLoanComponent } from './current-position-of-loan.component';

describe('CurrentPositionOfLoanComponent', () => {
  let component: CurrentPositionOfLoanComponent;
  let fixture: ComponentFixture<CurrentPositionOfLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPositionOfLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPositionOfLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
