import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HompageivComponent } from './hompageiv.component';

describe('HompageivComponent', () => {
  let component: HompageivComponent;
  let fixture: ComponentFixture<HompageivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HompageivComponent]
    });
    fixture = TestBed.createComponent(HompageivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
