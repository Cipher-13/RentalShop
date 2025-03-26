import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HompagevComponent } from './hompagev.component';

describe('HompagevComponent', () => {
  let component: HompagevComponent;
  let fixture: ComponentFixture<HompagevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HompagevComponent]
    });
    fixture = TestBed.createComponent(HompagevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
