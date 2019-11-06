import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdApplicationComponent } from './rd-application.component';

describe('RdApplicationComponent', () => {
  let component: RdApplicationComponent;
  let fixture: ComponentFixture<RdApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
