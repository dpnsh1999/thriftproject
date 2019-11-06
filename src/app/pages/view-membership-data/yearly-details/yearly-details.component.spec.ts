import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyDetailsComponent } from './yearly-details.component';

describe('YearlyDetailsComponent', () => {
  let component: YearlyDetailsComponent;
  let fixture: ComponentFixture<YearlyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearlyDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
