import { Routes } from "@angular/router";
import { MealListComponent } from "./meal/meal-list/meal-list.component";
import { AddEditMealComponent } from "./meal/add-edit-meal/add-edit-meal.component";

export const appRoutes: Routes = [
	{ path: '', component: MealListComponent },
	{ path: 'menu', component: MealListComponent },
	{ path: 'add-edit', component: AddEditMealComponent },
	{
		path: 'user',
		loadChildren: () => import('./user/user.module').then(m => m.UserModule)
	},
]