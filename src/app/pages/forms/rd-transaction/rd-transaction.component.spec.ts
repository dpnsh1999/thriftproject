import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdTransactionComponent } from './rd-transaction.component';

describe('RdTransactionComponent', () => {
  let component: RdTransactionComponent;
  let fixture: ComponentFixture<RdTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
