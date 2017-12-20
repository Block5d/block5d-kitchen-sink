import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadtoLocalComponent } from './uploadto-local.component';

describe('UploadtoLocalComponent', () => {
  let component: UploadtoLocalComponent;
  let fixture: ComponentFixture<UploadtoLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadtoLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadtoLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
