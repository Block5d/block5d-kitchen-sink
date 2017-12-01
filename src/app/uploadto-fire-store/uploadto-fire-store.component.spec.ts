import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadtoFireStoreComponent } from './uploadto-fire-store.component';

describe('UploadtoFireStoreComponent', () => {
  let component: UploadtoFireStoreComponent;
  let fixture: ComponentFixture<UploadtoFireStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadtoFireStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadtoFireStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
