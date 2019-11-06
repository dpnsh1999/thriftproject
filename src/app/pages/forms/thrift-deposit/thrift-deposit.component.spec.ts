import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThriftDepositComponent } from './thrift-deposit.component';

describe('ThriftDepositComponent', () => {
  let component: ThriftDepositComponent;
  let fixture: ComponentFixture<ThriftDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThriftDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThriftDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
