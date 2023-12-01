import { IsNotEmpty } from "class-validator";
 

export class CreateMealDto {
	@IsNotEmpty()
	name: string;

	@IsNotEmpty()
	description: string;

	@IsNotEmpty()
	price: string;


	@IsNotEmpty()
	type_id: number;

	@IsNotEmpty()
	category_id: number;

	@IsNotEmpty()
	user_id: number;

	img_url : string  

}
