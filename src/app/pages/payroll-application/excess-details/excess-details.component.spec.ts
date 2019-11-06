import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcessDetailsComponent } from './excess-details.component';

describe('ExcessDetailsComponent', () => {
  let component: ExcessDetailsComponent;
  let fixture: ComponentFixture<ExcessDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcessDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
