import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FDFormsComponent } from './fd-forms.component';

describe('FDFormsComponent', () => {
  let component: FDFormsComponent;
  let fixture: ComponentFixture<FDFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FDFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FDFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
