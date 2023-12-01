import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealService } from './meal/meal.service';
import { AuthService } from './user/auth.service';
 
 

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    MealService,
    AuthService
  ]
})
export class CoreModule { }

 