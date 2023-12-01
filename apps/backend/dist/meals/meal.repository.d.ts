import { DataSource, Repository } from "typeorm";
import { Meal } from "./entities/meal.entity";
import { CreateMealDto } from "./dto/create-meal.dto";
import { UpdateMealDto } from "./dto/update-meal.dto";
export declare class MealRepository extends Repository<Meal> {
    private dataSource;
    constructor(dataSource: DataSource);
    createMeal(createMealDto: CreateMealDto): Promise<Meal>;
    updateMeal(meal: Meal, updateMealDto: UpdateMealDto): Promise<Meal>;
}
