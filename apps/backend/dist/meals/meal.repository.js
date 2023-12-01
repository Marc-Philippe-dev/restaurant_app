"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealRepository = void 0;
const typeorm_1 = require("typeorm");
const meal_entity_1 = require("./entities/meal.entity");
const common_1 = require("@nestjs/common");
let MealRepository = class MealRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(meal_entity_1.Meal, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async createMeal(createMealDto) {
        const { user_id, name, description, type_id, category_id, price, img_url } = createMealDto;
        const meal = new meal_entity_1.Meal();
        meal.user_id = user_id;
        meal.name = name;
        meal.description = description;
        meal.type_id = type_id;
        meal.category_id = category_id;
        meal.price = price;
        meal.img_url = img_url;
        meal.created_at = new Date();
        await meal.save();
        return meal;
    }
    async updateMeal(meal, updateMealDto) {
        const { name, description, type_id, category_id, price, img_url } = updateMealDto;
        meal.name = name;
        meal.description = description;
        meal.type_id = type_id;
        meal.category_id = category_id;
        meal.price = price;
        meal.img_url = img_url;
        await meal.save();
        return meal;
    }
};
MealRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], MealRepository);
exports.MealRepository = MealRepository;
//# sourceMappingURL=meal.repository.js.map