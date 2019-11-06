import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllChequeListComponent } from './all-cheque-list.component';

describe('AllChequeListComponent', () => {
  let component: AllChequeListComponent;
  let fixture: ComponentFixture<AllChequeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllChequeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllChequeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
