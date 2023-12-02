import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MealService {
	apiUrl = 'http://localhost:3000/meals';

	constructor(private http: HttpClient) { }

	saveMeal(mealData) {
		let options = { headers: new HttpHeaders({ 'content-type': 'application/json' }) }
		return this.http.post(`${this.apiUrl}`, JSON.stringify(mealData), options).pipe(catchError(error => {
			console.error(error.message)
			return of(false)
		}))
	}

	getAll() { 
		return this.http.get<any[]>(this.apiUrl);
	}
	
	deleteMeal(id: number) {
		return this.http.delete(`${this.apiUrl}/${id}`) 
	}

}

// const MEALS = [
// 	{
// 		"id": 1,
// 		"title": "Eggs Benedict",
// 		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolorem, ex minima saepe quam, vero tempore eveniet ipsum ratione, vitae natus laudantium non repellat? Sunt facilis modi illo quidem nisi similique omnis dolorum, debitis deleniti non eum libero praesentium suscipit adipisci molestias odit saepe inventore. Magni dolores aspernatur consequuntur impedit!",
// 		"price": 8.99,
// 		"image": "assets/images/Breakfast/breakfast1.png",
// 		"type": "Breakfast"
// 	},
// 	{
// 		"id": 2,
// 		"title": "Breakfast Sandwich",
// 		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolorem, ex minima saepe quam, vero tempore eveniet ipsum ratione, vitae natus laudantium non repellat? Sunt facilis modi illo quidem nisi similique omnis dolorum, debitis deleniti non eum libero praesentium suscipit adipisci molestias odit saepe inventore. Magni dolores aspernatur consequuntur impedit!",
// 		"price": 9.99,
// 		"image": "assets/images/Breakfast/breakfast2.png",
// 		"type": "Breakfast"
// 	},
// 	{
// 		"id": 3,
// 		"title": "Baked Chiken",
// 		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolorem, ex minima saepe quam, vero tempore eveniet ipsum ratione, vitae natus laudantium non repellat? Sunt facilis modi illo quidem nisi similique omnis dolorum, debitis deleniti non eum libero praesentium suscipit adipisci molestias odit saepe inventore. Magni dolores aspernatur consequuntur impedit!",
// 		"price": 10.99,
// 		"image": "assets/images/Breakfast/breakfast3.png",
// 		"type": "Breakfast"
// 	},
// 	{
// 		"id": 4,
// 		"title": "Bagel and cream cheese",
// 		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolorem, ex minima saepe quam, vero tempore eveniet ipsum ratione, vitae natus laudantium non repellat? Sunt facilis modi illo quidem nisi similique omnis dolorum, debitis deleniti non eum libero praesentium suscipit adipisci molestias odit saepe inventore. Magni dolores aspernatur consequuntur impedit!",
// 		"price": 23.99,
// 		"image": "assets/images/Breakfast/breakfast4.png",
// 		"type": "Breakfast"
// 	},
// 	{
// 		"id": 5,
// 		"title": "Fried Egg Toast Brunch",
// 		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolorem, ex minima saepe quam, vero tempore eveniet ipsum ratione, vitae natus laudantium non repellat? Sunt facilis modi illo quidem nisi similique omnis dolorum, debitis deleniti non eum libero praesentium suscipit adipisci molestias odit saepe inventore. Magni dolores aspernatur consequuntur impedit!",
// 		"price": 3.99,
// 		"image": "assets/images/Breakfast/breakfast5.png",
// 		"type": "Breakfast"
// 	},
// 	{
// 		"id": 6,
// 		"title": "Toast Croissant Fried Egg",
// 		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolorem, ex minima saepe quam, vero tempore eveniet ipsum ratione, vitae natus laudantium non repellat? Sunt facilis modi illo quidem nisi similique omnis dolorum, debitis deleniti non eum libero praesentium suscipit adipisci molestias odit saepe inventore. Magni dolores aspernatur consequuntur impedit!",
// 		"price": 19.99,
// 		"image": "assets/images/Breakfast/breakfast6.png",
// 		"type": "Breakfast"
// 	},
// 	{
// 		"id": 7,
// 		"title": "Beef Steak",
// 		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolorem, ex minima saepe quam, vero tempore eveniet ipsum ratione, vitae natus laudantium non repellat? Sunt facilis modi illo quidem nisi similique omnis dolorum, debitis deleniti non eum libero praesentium suscipit adipisci molestias odit saepe inventore. Magni dolores aspernatur consequuntur impedit!",
// 		"price": 15.99,
// 		"image": "assets/images/lunch/lunch1.png",
// 		"type": "Lunch"
// 	},
// 	{
// 		"id": 8,
// 		"title": "Honey with Peppers",
// 		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolorem, ex minima saepe quam, vero tempore eveniet ipsum ratione, vitae natus laudantium non repellat? Sunt facilis modi illo quidem nisi similique omnis dolorum, debitis deleniti non eum libero praesentium suscipit adipisci molestias odit saepe inventore. Magni dolores aspernatur consequuntur impedit!",
// 		"price": 7.99,
// 		"image": "assets/images/lunch/lunch2.png",
// 		"type": "Lunch"
// 	},
// 	{
// 		"id": 9,
// 		"title": "Tarrgaon Rubbed Salmon",
// 		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolorem, ex minima saepe quam, vero tempore eveniet ipsum ratione, vitae natus laudantium non repellat? Sunt facilis modi illo quidem nisi similique omnis dolorum, debitis deleniti non eum libero praesentium suscipit adipisci molestias odit saepe inventore. Magni dolores aspernatur consequuntur impedit!",
// 		"price": 7.99,
// 		"image": "assets/images/lunch/lunch3.png",
// 		"type": "Lunch"
// 	},
// 	{
// 		"id": 10,
// 		"title": "Indian Lunch",
// 		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolorem, ex minima saepe quam, vero tempore eveniet ipsum ratione, vitae natus laudantium non repellat? Sunt facilis modi illo quidem nisi similique omnis dolorum, debitis deleniti non eum libero praesentium suscipit adipisci molestias odit saepe inventore. Magni dolores aspernatur consequuntur impedit!",
// 		"price": 8.99,
// 		"image": "assets/images/lunch/lunch4.png",
// 		"type": "Lunch"
// 	},
// 	{
// 		"id": 11,
// 		"title": "Fried Chicken Bento",
// 		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolorem, ex minima saepe quam, vero tempore eveniet ipsum ratione, vitae natus laudantium non repellat? Sunt facilis modi illo quidem nisi similique omnis dolorum, debitis deleniti non eum libero praesentium suscipit adipisci molestias odit saepe inventore. Magni dolores aspernatur consequuntur impedit!",
// 		"price": 13.99,
// 		"image": "assets/images/lunch/lunch5.png",
// 		"type": "Lunch"
// 	},
// 	{
// 		"id": 12,
// 		"title": "healthy Meal Plan",
// 		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolorem, ex minima saepe quam, vero tempore eveniet ipsum ratione, vitae natus laudantium non repellat? Sunt facilis modi illo quidem nisi similique omnis dolorum, debitis deleniti non eum libero praesentium suscipit adipisci molestias odit saepe inventore. Magni dolores aspernatur consequuntur impedit!",
// 		"price": 83.99,
// 		"image": "assets/images/lunch/lunch6.png",
// 		"type": "Lunch"
// 	},
// 	{
// 		"id": 13,
// 		"title": "Baked Chicken",
// 		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolorem, ex minima saepe quam, vero tempore eveniet ipsum ratione, vitae natus laudantium non repellat? Sunt facilis modi illo quidem nisi similique omnis dolorum, debitis deleniti non eum libero praesentium suscipit adipisci molestias odit saepe inventore. Magni dolores aspernatur consequuntur impedit!",
// 		"price": 66.99,
// 		"image": "assets/images/Dinner/dinner1.png",
// 		"type": "Dinner"
// 	},
// 	{
// 		"id": 14,
// 		"title": "Lemony Salmaon Piccata",
// 		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolorem, ex minima saepe quam, vero tempore eveniet ipsum ratione, vitae natus laudantium non repellat? Sunt facilis modi illo quidem nisi similique omnis dolorum, debitis deleniti non eum libero praesentium suscipit adipisci molestias odit saepe inventore. Magni dolores aspernatur consequuntur impedit!",
// 		"price": 56.99,
// 		"image": "assets/images/Dinner/dinner2.png",
// 		"type": "Dinner"
// 	},
// 	{
// 		"id": 15,
// 		"title": "Garlic Butter Baked Salmon",
// 		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolorem, ex minima saepe quam, vero tempore eveniet ipsum ratione, vitae natus laudantium non repellat? Sunt facilis modi illo quidem nisi similique omnis dolorum, debitis deleniti non eum libero praesentium suscipit adipisci molestias odit saepe inventore. Magni dolores aspernatur consequuntur impedit!",
// 		"price": 3.99,
// 		"image": "  assets/images/Dinner/dinner3.png",
// 		"type": "Dinner"
// 	},
// 	{
// 		"id": 16,
// 		"title": "French Fried with Cheese",
// 		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolorem, ex minima saepe quam, vero tempore eveniet ipsum ratione, vitae natus laudantium non repellat? Sunt facilis modi illo quidem nisi similique omnis dolorum, debitis deleniti non eum libero praesentium suscipit adipisci molestias odit saepe inventore. Magni dolores aspernatur consequuntur impedit!",
// 		"price": 23.99,
// 		"image": "assets/images/Dinner/dinner4.png",
// 		"type": "Dinner"
// 	},
// 	{
// 		"id": 17,
// 		"title": "Chicken Tenderion",
// 		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolorem, ex minima saepe quam, vero tempore eveniet ipsum ratione, vitae natus laudantium non repellat? Sunt facilis modi illo quidem nisi similique omnis dolorum, debitis deleniti non eum libero praesentium suscipit adipisci molestias odit saepe inventore. Magni dolores aspernatur consequuntur impedit!",
// 		"price": 12.99,
// 		"image": "assets/images/Dinner/dinner5.png",
// 		"type": "Dinner"
// 	},
// 	{
// 		"id": 18,
// 		"title": "Lentil Salad",
// 		"description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dolorem, ex minima saepe quam, vero tempore eveniet ipsum ratione, vitae natus laudantium non repellat? Sunt facilis modi illo quidem nisi similique omnis dolorum, debitis deleniti non eum libero praesentium suscipit adipisci molestias odit saepe inventore. Magni dolores aspernatur consequuntur impedit!",
// 		"price": 9.99,
// 		"image": "assets/images/Dinner/dinner6.png",
// 		"type": "Dinner"
// 	}
// ]