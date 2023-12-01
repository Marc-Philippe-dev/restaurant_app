import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MealService } from 'src/app/core/meal/meal.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {

  filterBy: string = 'breakfast';
  filteredMeals;

  meals;
  

  constructor(private mealService : MealService){}
 

  ngOnInit() {
    this.getAllMeal();
   
 
  }

  getAllMeal() {
    this.mealService.getAll().subscribe((data) => {
      this.meals = data;
      this.filteredMeals = this.meals;
    })
  }
  
  filterMeals(filterWord: string) {
    this.filteredMeals = this.meals?.filter(meal => meal.type.name.toLocaleLowerCase() === filterWord);
  }

}

