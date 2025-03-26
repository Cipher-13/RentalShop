import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageiiiComponent } from './homepageiii.component';

describe('HomepageiiiComponent', () => {
  let component: HomepageiiiComponent;
  let fixture: ComponentFixture<HomepageiiiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageiiiComponent]
    });
    fixture = TestBed.createComponent(HomepageiiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
