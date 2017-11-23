import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeUserComponent } from './like-user.component';

describe('LikeUserComponent', () => {
  let component: LikeUserComponent;
  let fixture: ComponentFixture<LikeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
