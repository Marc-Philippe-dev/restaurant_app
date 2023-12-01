import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { MealRepository } from './meal.repository';
import { Meal } from './entities/meal.entity';
export declare class MealsService {
    private MealRepository;
    constructor(MealRepository: MealRepository);
    create(createMealDto: CreateMealDto): Promise<Meal>;
    findAll(): Promise<Meal[]>;
    findOne(id: number): Promise<Meal>;
    update(id: number, updateMealDto: UpdateMealDto): Promise<Meal>;
    remove(id: number): Promise<void>;
}
