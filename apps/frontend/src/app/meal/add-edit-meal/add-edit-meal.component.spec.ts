import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMealComponent } from './add-edit-meal.component';

describe('AddEditMealComponent', () => {
  let component: AddEditMealComponent;
  let fixture: ComponentFixture<AddEditMealComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditMealComponent]
    });
    fixture = TestBed.createComponent(AddEditMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
