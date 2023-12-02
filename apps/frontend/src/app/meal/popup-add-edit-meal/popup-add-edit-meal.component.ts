import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MealService } from 'src/app/core/meal/meal.service';

@Component({
  selector: 'app-popup-add-edit-meal',
  templateUrl: './popup-add-edit-meal.component.html',
  styleUrls: ['./popup-add-edit-meal.component.css']
})
export class PopupAddEditMealComponent {
  mealType: string[] = ["Breakfast", "Lunch", "Dinner"];
  mealCategory: string[] = ["Appetizer", "Main course", "Dessert"];

  selectedFile;
  mealForm: FormGroup;

  constructor(private fb: FormBuilder , private mealService : MealService) {
    this.mealForm = this.fb.group({
      name: '',
      price: '',
      description: '',
      type_id: '',
      category_id: '',
      image:'',
      img_url: 'assets/images/Breakfast/breakfast1.png',
      user_id: 1
    })
  }

  onSelectedFile(event) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  saveMeal() {
    if (this.mealForm.valid) {
      this.mealService.saveMeal(this.mealForm.value).subscribe(
        resp => console.log(resp)
      )
    }
  }
}
