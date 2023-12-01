import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { MealsService } from './meals.service';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';

@Controller('meals')
export class MealsController {
  constructor(private readonly MealsService: MealsService) { }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createMealDto: CreateMealDto) {
    return this.MealsService.create(createMealDto);
  }

  @Get()
  findAll() {
    return this.MealsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.MealsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateMealDto: UpdateMealDto) {
    return this.MealsService.update(id, updateMealDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.MealsService.remove(id);
  }
}
