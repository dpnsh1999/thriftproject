import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdRequestComponent } from './rd-request.component';

describe('RdRequestComponent', () => {
  let component: RdRequestComponent;
  let fixture: ComponentFixture<RdRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
