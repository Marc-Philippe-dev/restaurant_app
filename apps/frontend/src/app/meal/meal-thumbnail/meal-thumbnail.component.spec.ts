import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealThumbnailComponent } from './meal-thumbnail.component';

describe('MealThumbnailComponent', () => {
  let component: MealThumbnailComponent;
  let fixture: ComponentFixture<MealThumbnailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MealThumbnailComponent]
    });
    fixture = TestBed.createComponent(MealThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
