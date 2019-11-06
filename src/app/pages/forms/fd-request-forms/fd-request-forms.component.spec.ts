import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdRequestFormsComponent } from './fd-request-forms.component';

describe('FdRequestFormsComponent', () => {
  let component: FdRequestFormsComponent;
  let fixture: ComponentFixture<FdRequestFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdRequestFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdRequestFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
