import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThriftCreditDetailsComponent } from './thrift-credit-details.component';

describe('ThriftCreditDetailsComponent', () => {
  let component: ThriftCreditDetailsComponent;
  let fixture: ComponentFixture<ThriftCreditDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThriftCreditDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThriftCreditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
