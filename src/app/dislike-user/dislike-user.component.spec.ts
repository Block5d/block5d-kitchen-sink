import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DislikeUserComponent } from './dislike-user.component';

describe('DislikeUserComponent', () => {
  let component: DislikeUserComponent;
  let fixture: ComponentFixture<DislikeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DislikeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DislikeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
