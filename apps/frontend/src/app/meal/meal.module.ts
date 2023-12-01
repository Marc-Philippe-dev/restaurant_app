import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListComponent } from './meal-list/meal-list.component';
import { MealThumbnailComponent } from './meal-thumbnail/meal-thumbnail.component';
import { AddEditMealComponent } from './add-edit-meal/add-edit-meal.component';
import { SharedModule } from '../shared/shared.module';
import { PopupAddEditMealComponent } from './popup-add-edit-meal/popup-add-edit-meal.component';



@NgModule({
  declarations: [
    MealListComponent,
    MealThumbnailComponent,
    AddEditMealComponent,
    PopupAddEditMealComponent
  ],
  imports: [
    SharedModule
  ]
})
export class MealModule { }
