import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddEditMealComponent } from './popup-add-edit-meal.component';

describe('PopupAddEditMealComponent', () => {
  let component: PopupAddEditMealComponent;
  let fixture: ComponentFixture<PopupAddEditMealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupAddEditMealComponent]
    });
    fixture = TestBed.createComponent(PopupAddEditMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
