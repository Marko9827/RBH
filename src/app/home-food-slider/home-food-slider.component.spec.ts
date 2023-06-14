import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFoodSliderComponent } from './home-food-slider.component';

describe('HomeFoodSliderComponent', () => {
  let component: HomeFoodSliderComponent;
  let fixture: ComponentFixture<HomeFoodSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeFoodSliderComponent]
    });
    fixture = TestBed.createComponent(HomeFoodSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
