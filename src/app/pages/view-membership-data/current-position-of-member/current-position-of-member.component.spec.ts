import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPositionOfMemberComponent } from './current-position-of-member.component';

describe('CurrentPositionOfMemberComponent', () => {
  let component: CurrentPositionOfMemberComponent;
  let fixture: ComponentFixture<CurrentPositionOfMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPositionOfMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPositionOfMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
