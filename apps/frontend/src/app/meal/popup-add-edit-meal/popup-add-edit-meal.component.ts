import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-popup-add-edit-meal',
  templateUrl: './popup-add-edit-meal.component.html',
  styleUrls: ['./popup-add-edit-meal.component.css']
})
export class PopupAddEditMealComponent {
  mealType: string[] = ["Breakfast", "Lunch", "Dinner"];
  mealCategory: string[] = ["Appetizer", "Main course", "Dessert"];
  mealForm



  constructor(private fb: FormBuilder) {
    this.mealForm = this.fb.group({
      name: '',
      price: '',
      description: '',
      type_id: '',
      category_id: '',
      img_url: ''
    })
  }

  saveMeal() {
    if (this.mealForm.valid) {
      console.log(this.mealForm.value);
    }
  }
}
