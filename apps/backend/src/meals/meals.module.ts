import { Module } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealsController } from './meals.controller';
import { MealRepository } from './meal.repository';

@Module({
  controllers: [MealsController],
  providers: [
    MealRepository,
    MealsService]
})
export class MealsModule { }
