import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareCertificateComponent } from './share-certificate.component';

describe('ShareCertificateComponent', () => {
  let component: ShareCertificateComponent;
  let fixture: ComponentFixture<ShareCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
