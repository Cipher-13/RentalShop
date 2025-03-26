import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageiiComponent } from './homepageii.component';

describe('HomepageiiComponent', () => {
  let component: HomepageiiComponent;
  let fixture: ComponentFixture<HomepageiiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageiiComponent]
    });
    fixture = TestBed.createComponent(HomepageiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
