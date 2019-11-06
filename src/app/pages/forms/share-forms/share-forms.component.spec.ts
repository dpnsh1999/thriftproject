import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareFormsComponent } from './share-forms.component';

describe('ShareFormsComponent', () => {
  let component: ShareFormsComponent;
  let fixture: ComponentFixture<ShareFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
