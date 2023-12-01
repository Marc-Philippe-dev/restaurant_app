import { User } from "src/users/entities/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn  } from "typeorm";
import { Category } from "./category.entity";
import { Type } from "./type.entity";
 

@Entity()
export class Meal extends BaseEntity {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	description: string;

	@Column()
	price: string;

	@Column()
	img_url: string;

	@Column()
	created_at: Date;

	@ManyToOne(() => Type , {eager:true})
	@JoinColumn({ name: 'type_id' })
	type: Type;
	@Column()
	type_id: number ;

	@ManyToOne(() => Category, { eager: true })
	@JoinColumn({ name: 'category_id' })
	category: Category;
	@Column()
	category_id: number;

	@Column()
	user_id: number;
	

	@ManyToOne(() => User  ) 
	@JoinColumn({ name: 'user_id' })
	user: User;

}
