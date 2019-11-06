import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassbookDetailsComponent } from './passbook-details.component';

describe('PassbookDetailsComponent', () => {
  let component: PassbookDetailsComponent;
  let fixture: ComponentFixture<PassbookDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassbookDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassbookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
