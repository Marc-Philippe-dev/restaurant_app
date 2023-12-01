import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MealRepository } from './meal.repository';
import { Meal } from './entities/meal.entity';

@Injectable()
export class MealsService {

  constructor(
    @InjectRepository(MealRepository) private MealRepository: MealRepository
  ) { }

  async create(createMealDto: CreateMealDto) {
    return await this.MealRepository.createMeal(createMealDto);
  }

  async findAll() {
    return await this.MealRepository.find()
  }

  async findOne(id: number) {
    const found = await this.MealRepository.findOneBy({ id })

    if (!found) {
      throw new NotFoundException(`Meal with id :  ${id} not found`);
    }

    return found;
  }

  async update(id: number, updateMealDto: UpdateMealDto) {
    const meal: Meal = await this.findOne(id);


    return this.MealRepository.updateMeal(meal, updateMealDto)


  }

  async remove(id: number) {
    const result = await this.MealRepository.delete(id);

    if (!result.affected) {
      throw new NotFoundException(`Meal with id :  ${id} not found`);
    }
  }
}
