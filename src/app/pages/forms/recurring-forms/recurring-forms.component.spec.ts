import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringFormsComponent } from './recurring-forms.component';

describe('RecurringFormsComponent', () => {
  let component: RecurringFormsComponent;
  let fixture: ComponentFixture<RecurringFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecurringFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
