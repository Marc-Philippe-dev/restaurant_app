import { MealsService } from './meals.service';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
export declare class MealsController {
    private readonly MealsService;
    constructor(MealsService: MealsService);
    create(createMealDto: CreateMealDto): Promise<import("./entities/meal.entity").Meal>;
    findAll(): Promise<import("./entities/meal.entity").Meal[]>;
    findOne(id: number): Promise<import("./entities/meal.entity").Meal>;
    update(id: number, updateMealDto: UpdateMealDto): Promise<import("./entities/meal.entity").Meal>;
    remove(id: number): Promise<void>;
}
