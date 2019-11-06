import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThriftDetailsComponent } from './thrift-details.component';

describe('ThriftDetailsComponent', () => {
  let component: ThriftDetailsComponent;
  let fixture: ComponentFixture<ThriftDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThriftDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThriftDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
