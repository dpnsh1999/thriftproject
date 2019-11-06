import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LsfDetailsComponent } from './lsf-details.component';

describe('LsfDetailsComponent', () => {
  let component: LsfDetailsComponent;
  let fixture: ComponentFixture<LsfDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsfDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsfDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
