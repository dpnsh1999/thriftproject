import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RDDetailsComponent } from './rd-details.component';

describe('RDDetailsComponent', () => {
  let component: RDDetailsComponent;
  let fixture: ComponentFixture<RDDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RDDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RDDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
