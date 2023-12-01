import { User } from "src/users/entities/user.entity";
import { BaseEntity } from "typeorm";
import { Category } from "./category.entity";
import { Type } from "./type.entity";
export declare class Meal extends BaseEntity {
    id: number;
    name: string;
    description: string;
    price: string;
    img_url: string;
    created_at: Date;
    type: Type;
    type_id: number;
    category: Category;
    category_id: number;
    user_id: number;
    user: User;
}
