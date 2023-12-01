import { DataSource, Repository } from "typeorm";
import { Meal } from "./entities/meal.entity";
import { Injectable } from "@nestjs/common";
import { CreateMealDto } from "./dto/create-meal.dto";
import { UpdateMealDto } from "./dto/update-meal.dto";


@Injectable()
export class MealRepository extends Repository<Meal> {

	constructor(private dataSource: DataSource) {
		super(Meal, dataSource.createEntityManager());
	}

	async createMeal(createMealDto: CreateMealDto): Promise<Meal> {
		const { user_id, name, description, type_id, category_id, price, img_url } = createMealDto;
		
		 

		const meal = new Meal();

		meal.user_id = user_id;
		meal.name = name;
		meal.description = description;
		meal.type_id = type_id;
		meal.category_id = category_id;
		meal.price = price;
		meal.img_url = img_url;
		meal.created_at = new Date();

		await meal.save()

		return meal;
	}

	async updateMeal(meal: Meal, updateMealDto: UpdateMealDto) {

	  	const { name, description, type_id, category_id, price, img_url} = updateMealDto;

		meal.name = name;
		meal.description = description;
		meal.type_id = type_id;
		meal.category_id = category_id;
		meal.price = price;
		meal.img_url = img_url;

		await meal.save()




		return meal;

	}


}
