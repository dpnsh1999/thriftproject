import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarantorRecoveryComponent } from './guarantor-recovery.component';

describe('GuarantorRecoveryComponent', () => {
  let component: GuarantorRecoveryComponent;
  let fixture: ComponentFixture<GuarantorRecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuarantorRecoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuarantorRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
